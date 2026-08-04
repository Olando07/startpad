import React, { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import AppGrid from "./components/AppGrid";
import { presets } from "./data/presets";

function App() {
	const [activeId, setActiveId] = useState(presets[0].id);
	const activeWorkspace = presets.find((w) => w.id === activeId);

	useEffect(() => {
		const checkTime = () => {
			const now = new Date();
			const currentTime = `${now.getHours().toString().padStart(2, "0")}:${now.getMinutes().toString().padStart(2, "0")}`;

			const match = presets
				.filter((w) => w.activeTime)
				.sort((a, b) => (a.activeTime! > b.activeTime! ? -1 : 1))
				.find((w) => w.activeTime! <= currentTime);

			if (match) setActiveId(match.id);
		};

		checkTime();
		const interval = setInterval(checkTime, 60000);
		return () => clearInterval(interval);
	}, []);

	return (
		<div className="flex flex-col h-screen w-screen overflow-hidden">
			<div className="app-shell flex flex-row overflow-hidden flex-1">
				<Sidebar workspaces={presets} activeId={activeId} onSelect={(id) => setActiveId(id)} />
				<main className="flex-1 px-10 py-6 overflow-y-auto">
					<AppGrid sites={activeWorkspace?.sites ?? []} />
				</main>
			</div>
		</div>
	);
}

export default App;
