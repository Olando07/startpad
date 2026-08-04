import React from "react";
import type { Site } from "../data/presets";
// import { presets } from "../data/presets";
import AppCard from "./AppCard";

interface AppGridProps {
	sites: Site[];
}

function AppGrid({ sites }: AppGridProps) {
	return (
		<>
			<button className="mb-6 text-lg bg-teal-600 px-5 py-1 rounded-md hover:bg-teal-700" onClick={() => sites.forEach((site) => window.open(site.url))}>Launch All</button>
			<div className="grid grid-flow-col-dense grid-cols-5 gap-2">
				{sites.map((site) => (
					<AppCard key={site.name} site={site} />
				))}
			</div>
		</>
	);
}

export default AppGrid;
