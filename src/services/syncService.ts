import * as fs from "fs";
import * as path from "path";
import { FTPService } from "./ftpService";
import Paths from "../models/paths";

/**
 * SyncService handles synchronization of mods and emotes between FTP server and local paths.
 */
class SyncService {
  ftpService: FTPService;
  paths: Paths;

  /**
   * Initializes SyncService with FTPService and Paths.
   * @param {FTPService} ftpService - Service for managing FTP operations.
   * @param {Paths} paths - Paths object for local and server paths.
   */
  constructor(ftpService: FTPService, paths: Paths) {
    this.ftpService = ftpService;
    this.paths = paths;
  }

  /**
   * Synchronizes files from a server directory to a local directory.
   * Downloads missing files from server to local.
   * @param serverPath - Directory path on server.
   * @param localPath - Directory path locally.
   * @param label - Label for logging (e.g., "Mods" or "Emotes").
   */
  async syncDirectory(serverPath: string, localPath: string, label: string) {
    console.log(`Starting ${label} synchronization...`);
    fs.mkdirSync(localPath, { recursive: true });
    const downloadedFiles: string[] = [];

    const serverFiles = await this.ftpService.listFiles(serverPath);
    console.log(`Detected ${serverFiles.length} files in ${label} directory.`);

    for (const fileName of serverFiles) {
      const localFilePath = path.join(localPath, fileName);
      const remoteFilePath = `${serverPath}/${fileName}`;

      if (!fs.existsSync(localFilePath)) {
        console.log(`Downloading ${fileName}...`);
        await this.ftpService.downloadFile(remoteFilePath, localFilePath);
        downloadedFiles.push(fileName);
      }
    }

    console.log(`${label} sync complete. Files downloaded:`, downloadedFiles);
  }

  /**
   * Orchestrates synchronization for mods and optionally emotes.
   */
  async syncAll() {
    await this.syncDirectory(
      this.paths.modsServerPath,
      this.paths.modsLocalPath,
      "Mods"
    );

    if (this.paths.emotesServerPath && this.paths.emotesLocalPath) {
      await this.syncDirectory(
        this.paths.emotesServerPath,
        this.paths.emotesLocalPath,
        "Emotes"
      );
    } else {
      console.log("Skipping emotes sync: Emotes path not configured.");
    }
  }
}

export default SyncService;
