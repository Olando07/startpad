export interface Site {
	name: string;
	url: string;
	icon?: string;
}

export interface Workspace {
	id: string;
	label: string;
	sites: Site[];
	activeTime?: string;
}

export const presets: Workspace[] = [
	{
		id: "gaming",
		label: "Gaming",
		activeTime: "18:00",
		sites: [
			{ name: "Spotify", url: "https://open.spotify.com" },
			{ name: "Discord", url: "https://discord.com/app" },
			{ name: "Twitch", url: "https://twitch.tv" },
			{ name: "Steam", url: "https://store.steampowered.com" },
		],
	},
	{
		id: "work",
		label: "Work",
		activeTime: "08:00",
		sites: [
			{ name: "Gmail", url: "https://mail.google.com" },
			{ name: "Google Calendar", url: "https://calendar.google.com" },
			{ name: "Notion", url: "https://notion.so" },
			{ name: "Slack", url: "https://app.slack.com" },
		],
	},
	{
		id: "development",
		label: "Development",
		activeTime: "13:00",
		sites: [
			{ name: "GitHub", url: "https://github.com" },
			{ name: "Spotify", url: "https://open.spotify.com" },
			{ name: "Stack Overflow", url: "https://stackoverflow.com" },
			{ name: "MDN", url: "https://developer.mozilla.org" },
		],
	},
];
