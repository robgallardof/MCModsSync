
# MC Mod Sync

## Descripción
MC Mod Sync es una herramienta diseñada para sincronizar mods y emotes de Minecraft entre un sistema local y un servidor FTP remoto, facilitando la consistencia de mods entre configuraciones.

---

## Configuración

1. Localiza el archivo `project-config.json` en la raíz del proyecto.
2. Edita los valores para que coincidan con las rutas de tu servidor y local. **Los campos marcados como opcionales pueden dejarse vacíos o eliminarse si no son necesarios**.

### Ejemplo de Configuración

```json
{
  "ftp": {
    "host": "ftp.ejemplo.com",             // Dirección del servidor FTP (Requerido)
    "port": 21,                            // Puerto FTP, predeterminado 21 (Opcional)
    "user": "tu_usuario",                  // Nombre de usuario FTP (Requerido)
    "password": "tu_contraseña"            // Contraseña FTP (Requerido)
  },
  "paths": {
    "modsServerPath": "/servidor/mods",         // Ruta en el servidor para mods (Requerido)
    "emotesServerPath": "/servidor/emotes",     // Ruta en el servidor para emotes, si se usa (Opcional)
    "modsLocalPath": "\.minecraft\mods",      // Ruta local en la PC para mods (Requerido)
    "emotesLocalPath": "\.minecraft\emotes",  // Ruta local en la PC para emotes (Opcional)
    "minecraftLauncherPath": "C:\ruta\a\Minecraft.exe" // Ruta del lanzador de Minecraft (Opcional)
  },
  "timeout": 30000 // Tiempo de espera para operaciones FTP en ms (Opcional, predeterminado 30000)
}
```

---

## Uso

1. Ejecuta `npm run app` para instalar las dependencias e iniciar la sincronizacion de mods.
2. Si `minecraftLauncherPath` está configurado, Minecraft se abrirá automáticamente al finalizar la sincronización.

---

## Descripción de Campos

- **ftp.host**: Dirección del servidor FTP (Requerido)
- **ftp.port**: Puerto del servidor FTP, predeterminado 21 (Opcional)
- **ftp.user**: Nombre de usuario FTP (Requerido)
- **ftp.password**: Contraseña FTP (Requerido)
- **paths.modsServerPath**: Ruta en el servidor FTP para mods (Requerido)
- **paths.emotesServerPath**: Ruta en el servidor FTP para emotes, si se usa (Opcional)
- **paths.modsLocalPath**: Ruta local en la PC para mods (Requerido)
- **paths.emotesLocalPath**: Ruta local en la PC para emotes, si se usa (Opcional)
- **paths.minecraftLauncherPath**: Ruta del lanzador de Minecraft para auto-inicio, si se desea (Opcional)
- **timeout**: Tiempo de espera para operaciones FTP en ms, predeterminado 30000 (Opcional)