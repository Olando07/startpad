import React, { useState} from "react";
import type { Site } from "../data/presets";
// import { presets } from "../data/presets";

interface AppCardProps {
	site: Site;
}

function AppCard({ site }: AppCardProps) {
	const [iconUrl, setIconUrl] = useState<string>(`https://www.google.com/s2/favicons?domain=${site.url}&sz=64`);

	return (
		<div className="flex flex-col w-24 h-24 items-center gap-2 p-2 rounded-xl bg-slate-700 hover:bg-slate-600 cursor-pointer transition-colors" onClick={() => window.open(site.url)}>
			<div className="w-12 h-14 rounded-lg flex items-center justify-center"><img src={iconUrl} alt={site.name} className="w-12 h-12" /></div>
			<p className="text-md text-slate-200 text-center">{site.name}</p>
		</div>
	);
}

export default AppCard;
