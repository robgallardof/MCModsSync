import { loadConfig } from "./utils/configLoader";
import SyncService from "./services/syncService";
import Paths from "./models/paths";
import { FTPService } from "./services/ftpService";

/**
 * Main function to execute the synchronization process.
 * Loads configuration, initializes FTP and Sync services, and runs sync.
 * Handles any errors during the process.
 */
async function main() {
  const config = loadConfig();
  const ftpService = new FTPService();
  const paths = new Paths(config);

  try {
    await ftpService.connect(config);
    const syncService = new SyncService(ftpService, paths);
    await syncService.syncAll();
  } catch (error) {
    console.error("Error during synchronization:", error);
  } finally {
    await ftpService.disconnect();
  }
}

main();
