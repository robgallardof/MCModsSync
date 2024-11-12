import * as fs from "fs";
import * as path from "path";

/**
 * Configuration interface defining the structure for FTP and path settings.
 */
export interface Config {
  ftp: {
    host: string;
    port: number;
    user: string;
    password: string;
  };
  paths: {
    modsServerPath: string;
    emotesServerPath: string;
    modsLocalPath: string;
    emotesLocalPath: string;
    minecraftLauncherPath: string;
  };
  timeout: number;
}

/**
 * Loads the configuration from a JSON file located in the config folder.
 * Uses the current working directory to ensure the correct path.
 * @returns {Config} Parsed configuration object.
 */
export function loadConfig(): Config {
  const configPath = path.resolve(process.cwd(), "project-config.json");
  const rawData = fs.readFileSync(configPath, "utf-8");
  return JSON.parse(rawData) as Config;
}
