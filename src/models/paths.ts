import * as path from "path";
import { Config } from "../utils/configLoader";

/**
 * Represents paths for local and server synchronization.
 */
class Paths {
  modsServerPath: string;
  emotesServerPath?: string;
  modsLocalPath: string;
  emotesLocalPath?: string;
  minecraftLauncherPath?: string;

  /**
   * Initializes paths based on config.
   * @param {Config} config Configuration object with paths.
   */
  constructor(config: Config) {
    this.modsServerPath = config.paths.modsServerPath;
    this.emotesServerPath = config.paths.emotesServerPath || "";
    this.modsLocalPath = path.join(
      process.env.APPDATA || "",
      config.paths.modsLocalPath.replace("%AppData%", "")
    );
    this.emotesLocalPath = config.paths.emotesLocalPath
      ? path.join(process.env.APPDATA || "", config.paths.emotesLocalPath.replace("%AppData%", ""))
      : "";
    this.minecraftLauncherPath = config.paths.minecraftLauncherPath || "";
  }
}

export default Paths;