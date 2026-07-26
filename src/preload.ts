import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("api", {
	// window controls
	minimize: () => ipcRenderer.invoke("window-minimize"),
	maximize: () => ipcRenderer.invoke("window-maximize"),
	close: () => ipcRenderer.invoke("window-close"),

	// app management
	getApps: () => ipcRenderer.invoke("get-apps"),
	getIcon: (path: string) => ipcRenderer.invoke('get-icon', path),
	launchApp: (path: string) => ipcRenderer.invoke("launch-app", path),
});
