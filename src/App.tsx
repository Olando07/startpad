import React, { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import AppGrid from "./components/AppGrid";
import Modal from "./components/Modal"; 
import { presets, type Workspace } from "./data/presets";
import "./styles/index.css";

function App() {
	const [activeId, setActiveId] = useState(presets[0].id);

	const [workspaces, setWorkspaces] = useState(() => {
		const saved = localStorage.getItem("workspaces");
		return saved ? JSON.parse(saved) : presets;
	});

	useEffect(() => {
		localStorage.setItem("workspaces", JSON.stringify(workspaces));
	}, [workspaces]);

	const activeWorkspace = workspaces.find((w: Workspace) => w.id === activeId);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const toggleModal = () => setIsModalOpen((prev) => !prev);

	const [isEditing, setIsEditing] = useState(false);
	const toggleEdit = () => setIsEditing((prev) => !prev);

	useEffect(() => {
		const checkTime = () => {
			const now = new Date();
			const currentTime = `${now.getHours().toString().padStart(2, "0")}:${now.getMinutes().toString().padStart(2, "0")}`;

			const match = workspaces
				.filter((w: Workspace) => w.activeTime)
				.sort((a: Workspace, b: Workspace) => (a.activeTime! > b.activeTime! ? -1 : 1))
				.find((w: Workspace) => w.activeTime! <= currentTime);

			if (match) setActiveId(match.id);
		};

		checkTime();
		const interval = setInterval(checkTime, 60000);
		return () => clearInterval(interval);
	}, []);

	return (
		<div className="flex flex-col h-screen w-screen overflow-hidden">
			<div className="app-shell flex flex-row overflow-hidden flex-1">
				<Sidebar workspaces={workspaces} activeId={activeId} onSelect={(id) => setActiveId(id)} isEditing={isEditing} onToggleEdit={toggleEdit} onToggleModal={toggleModal} />
				{isModalOpen && (
					<Modal
						onClose={toggleModal}
						currentSites={activeWorkspace?.sites ?? []}
						onAdd={(site) => {
							const updated = workspaces.map((w: Workspace) => (w.id === activeId ? { ...w, sites: [...w.sites, { name: site.name, url: site.url }] } : w));
							setWorkspaces(updated);
							toggleModal();
						}}
					/>
				)}
				<main className="flex-1 px-10 py-6 overflow-y-auto overflow-x-hidden">
					<AppGrid
						sites={activeWorkspace?.sites ?? []}
						isEditing={isEditing}
						onRemove={(url) => {
							const updated = workspaces.map((w: Workspace) => (w.id === activeId ? { ...w, sites: w.sites.filter((s) => s.url !== url) } : w));
							setWorkspaces(updated);
						}}
						onReorder={(reordered) => {
							const updated = workspaces.map((w: Workspace) => (w.id === activeId ? { ...w, sites: reordered } : w));
							setWorkspaces(updated);
						}}
					/>
				</main>
			</div>
		</div>
	);
}

export default App;
