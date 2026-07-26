import React from "react";
import { App } from "../data/presets";
import AppCard from "./AppCard";

interface AppGridProps {
	apps: App[];
}

function AppGrid({ apps }: AppGridProps) {
	return (
		<>
			<button className="mb-6 text-lg bg-teal-600 px-5 py-1 rounded-md hover:bg-teal-700" onClick={() => apps.forEach((app) => window.api.launchApp(app.path))}>Launch All</button>
			<div className="grid grid-flow-col-dense grid-cols-5 gap-2">
				{apps.map((app) => (
					<AppCard key={app.name} app={app} />
				))}
			</div>
		</>
	);
}

export default AppGrid;
