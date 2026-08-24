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
			{ name: "YouTube", url: "https://youtube.com" },
			{ name: "Reddit Gaming", url: "https://reddit.com/r/gaming" },
			{ name: "Epic Games", url: "https://store.epicgames.com" },
			{ name: "PokeRogue", url: "https://pokerogue.net" },
			{ name: "IGN", url: "https://ign.com" },
			{ name: "GameFAQs", url: "https://gamefaqs.gamespot.com" },
		],
	},
	{
		id: "work",
		label: "Work",
		activeTime: "08:00",
		sites: [
			{ name: "Gmail", url: "https://mail.google.com" },
			{ name: "Google Calendar", url: "https://calendar.google.com" },
			{ name: "Google Drive", url: "https://drive.google.com" },
			{ name: "Google Docs", url: "https://docs.google.com" },
			{ name: "Google Sheets", url: "https://sheets.google.com" },
			{ name: "Notion", url: "https://notion.so" },
			{ name: "Slack", url: "https://app.slack.com" },
			{ name: "Zoom", url: "https://zoom.us" },
			{ name: "Trello", url: "https://trello.com" },
			{ name: "Asana", url: "https://asana.com" },
			{ name: "LinkedIn", url: "https://linkedin.com" },
			{ name: "Microsoft Teams", url: "https://teams.microsoft.com" },
			{ name: "Dropbox", url: "https://dropbox.com" },
			{ name: "Figma", url: "https://figma.com" },
		],
	},
	{
		id: "coding",
		label: "Coding",
		activeTime: "13:00",
		sites: [
			{ name: "GitHub", url: "https://github.com" },
			{ name: "Spotify", url: "https://open.spotify.com" },
			{ name: "Stack Overflow", url: "https://stackoverflow.com" },
			{ name: "MDN", url: "https://developer.mozilla.org" },
			{ name: "React Docs", url: "https://react.dev" },
			{ name: "JavaScript Info", url: "https://javascript.info" },
			{ name: "Kotlin Docs", url: "https://kotlinlang.org/docs" },
			{ name: "TypeScript Docs", url: "https://typescriptlang.org/docs" },
			{ name: "Tailwind Docs", url: "https://tailwindcss.com/docs" },
			{ name: "Big O Cheatsheet", url: "https://www.bigocheatsheet.com" },
			{ name: "DevDocs", url: "https://devdocs.io" },
			{ name: "Can I Use", url: "https://caniuse.com" },
			{ name: "CodePen", url: "https://codepen.io" },
			{ name: "npm", url: "https://npmjs.com" },
			{ name: "Vercel", url: "https://vercel.com" },
			{ name: "Claude", url: "https://claude.ai" },
		],
	},
];
