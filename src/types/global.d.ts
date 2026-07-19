export {};

declare global {
	interface Window {
		api: {
			minimize: () => Promise<void>;
			maximize: () => Promise<void>;
			close: () => Promise<void>;
			getApps: () => Promise<string[]>;
			launchApp: (path: string) => Promise<void>;
		};
	}
}