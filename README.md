
# MC Mod Sync

## Description
MC Mod Sync is a tool designed to synchronize Minecraft mods and emotes between a local system and a remote FTP server, simplifying mod consistency across setups.

---

## Configuration

1. Locate the `project-config.json` file in the root of the project.
2. Edit the values to match your server and local paths. **Fields marked as optional can be left blank or removed if not required**.

### Example Configuration

```json
{
  "ftp": {
    "host": "ftp.example.com",         // FTP server address (Required)
    "port": 21,                        // FTP port, default is 21 (Optional)
    "user": "your_username",           // FTP username (Required)
    "password": "your_password"        // FTP password (Required)
  },
  "paths": {
    "modsServerPath": "/server/mods",       // Server path for mods (Required)
    "emotesServerPath": "/server/emotes",   // Server path for emotes, if used (Optional)
    "modsLocalPath": "\.minecraft\mods",  // Local PC path for mods (Required)
    "emotesLocalPath": "\.minecraft\emotes", // Local PC path for emotes (Optional)
    "minecraftLauncherPath": "C:\path\to\Minecraft.exe" // Minecraft launcher path, for auto-launch (Optional)
  },
  "timeout": 30000 // Timeout for FTP operations in milliseconds (Optional, default is 30000)
}
```

---

## Usage

1. Run `npm app` to install dependencies and sync mods.

3. If `minecraftLauncherPath` is provided, Minecraft will automatically open after syncing.

---

## Field Descriptions

- **ftp.host**: FTP server address (Required)
- **ftp.port**: FTP port, defaults to 21 (Optional)
- **ftp.user**: FTP username (Required)
- **ftp.password**: FTP password (Required)
- **paths.modsServerPath**: FTP server path for mods (Required)
- **paths.emotesServerPath**: FTP server path for emotes, if used (Optional)
- **paths.modsLocalPath**: Local PC path for mods (Required)
- **paths.emotesLocalPath**: Local PC path for emotes, if used (Optional)
- **paths.minecraftLauncherPath**: Minecraft launcher path for auto-launch, if desired (Optional)
- **timeout**: Timeout for FTP operations in ms, defaults to 30000 (Optional)