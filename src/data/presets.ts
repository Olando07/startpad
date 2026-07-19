export interface App {
	name: string;
	path: string;
	icon?: string;
}

export interface Workspace {
	id: string;
	label: string;
	apps: App[];
}

export const presets: Workspace[] = [
	// gaming workspace
	{
		id: "gaming",
		label: "Gaming",
		apps: [
			{ name: "Spotify", path: "C:/Users/oland/AppData/Roaming/Spotify/Spotify.exe" },
			{ name: "Discord", path: "C:/Users/oland/AppData/Local/Discord/Update.exe --processStart Discord.exe" },
		],
	},
	// wfh workspace
	{
		id: "work",
		label: "Work",
		apps: [
			{ name: "VS Code", path: "C:/Users/oland/AppData/Local/Programs/Microsoft VS Code/Code.exe" },
			{ name: "Chrome", path: "C:/Program Files/Google/Chrome/Application/chrome.exe" },
		],
	},
	// dev workspace
	{
		id: "development",
		label: "Development",
		apps: [
			{ name: "VS Code", path: "C:/Users/oland/AppData/Local/Programs/Microsoft VS Code/Code.exe" },
			{ name: "Chrome", path: "C:/Program Files/Google/Chrome/Application/chrome.exe" },
			{ name: "Spotify", path: "C:/Users/oland/AppData/Roaming/Spotify/Spotify.exe" },
		],
	},
	// creative workspace
];
