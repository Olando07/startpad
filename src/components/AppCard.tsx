import React, {useEffect, useState} from "react";
import { App } from "../data/presets";

interface AppCardProps {
	app: App;
}

function AppCard({ app }: AppCardProps) {
	const [iconUrl, setIconUrl] = useState<string>('');
	useEffect(() => {window.api.getIcon(app.path).then(setIconUrl)}, [app.path]);

	return (
		<div className="flex flex-col w-24 h-24 items-center gap-2 p-2 rounded-xl bg-slate-700 hover:bg-slate-600 cursor-pointer transition-colors" onClick={() => window.api.launchApp(app.path)}>
			<div className="w-12 h-14 rounded-lg flex items-center justify-center"><img src={iconUrl} alt={app.name} className="w-12 h-12" /></div>
			<p className="text-md text-slate-200 text-center">{app.name}</p>
		</div>
	);
}

export default AppCard;
