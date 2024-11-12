import FTP from "promise-ftp";
import * as fs from "fs";
import { Config } from "../utils/configLoader";

/**
 * FTPService class for handling FTP operations using promise-ftp.
 */
export class FTPService {
  private client: FTP;

  constructor() {
    this.client = new FTP();
  }

  /**
   * Connects to the FTP server using the provided configuration.
   * @param config - FTP connection configuration.
   */
  async connect(config: Config) {
    await this.client.connect({
      host: config.ftp.host,
      port: config.ftp.port,
      user: config.ftp.user,
      password: config.ftp.password,
    });
    console.log("Connected to FTP server");
  }

  /**
   * Lists files in a directory on the FTP server.
   * @param directory - Directory path on the FTP server.
   * @returns {Promise<string[]>} List of file names.
   */
  async listFiles(directory: string): Promise<string[]> {
    const files = await this.client.list(directory);
    return files.map((file: any) => file.name);
  }

  /**
   * Downloads a file from the FTP server to the local filesystem.
   * @param remotePath - Path of the file on the FTP server.
   * @param localPath - Local path to save the downloaded file.
   */
  async downloadFile(remotePath: string, localPath: string) {
    const stream = await this.client.get(remotePath);
    return new Promise<void>((resolve, reject) => {
      const writeStream = fs.createWriteStream(localPath);
      stream.pipe(writeStream);
      stream.on("end", resolve);
      stream.on("error", reject);
    });
  }

  /**
   * Disconnects from the FTP server.
   */
  async disconnect() {
    await this.client.end();
    console.log("Disconnected from FTP server");
  }
}
