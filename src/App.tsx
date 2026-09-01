import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import AppGrid from "./components/AppGrid";
import Modal from "./components/Modal";
import { presets, type Workspace } from "./data/presets";
import "./styles/index.css";

function App() {
	const [activeId, setActiveId] = useState(() => {
		const saved = localStorage.getItem("activeWorkspace");
		if (saved) return saved;

		// If no saved workspace, check if any workspace has a matching time
		const savedWorkspaces = localStorage.getItem("workspaces");
		const workspacesData = savedWorkspaces ? JSON.parse(savedWorkspaces) : presets;

		const now = new Date();
		const currentTime = `${now.getHours().toString().padStart(2, "0")}:${now.getMinutes().toString().padStart(2, "0")}`;

		const match = workspacesData
			.filter((w: Workspace) => w.activeTime)
			.sort((a: Workspace, b: Workspace) => (a.activeTime! > b.activeTime! ? -1 : 1))
			.find((w: Workspace) => w.activeTime! <= currentTime);

		return match?.id || presets[0].id;
	});

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

	const [isSitesEditing, setIsSitesEditing] = useState(false);
	const toggleSitesEdit = () => setIsSitesEditing((prev) => !prev);

	const [userName, setUserName] = useState(() => {
		const saved = localStorage.getItem("userName");
		return saved || "User";
	});

	useEffect(() => {
		localStorage.setItem("userName", userName);
	}, [userName]);

	useEffect(() => {
		localStorage.setItem("activeWorkspace", activeId);
	}, [activeId]);

	return (
		<div className="flex flex-col h-screen w-screen overflow-hidden">
			<div className="app-shell flex flex-row overflow-hidden flex-1">
				<Sidebar
					workspaces={workspaces}
					activeId={activeId}
					onSelect={(id) => setActiveId(id)}
					onAddWorkspace={(name) => {
						const newWorkspace = {
							id: name.toLowerCase().replace(/\s+/g, "-"),
							label: name,
							sites: [],
						};
						setWorkspaces([...workspaces, newWorkspace]);
					}}
					onDeleteWorkspace={(id) => {
						const updated = workspaces.filter((w: Workspace) => w.id !== id);
						setWorkspaces(updated);
						if (activeId === id) setActiveId(updated[0]?.id ?? "");
					}}
					isSitesEditing={isSitesEditing}
					onToggleSitesEdit={toggleSitesEdit}
					onRenameWorkspace={(id, name) => {
						const updated = workspaces.map((w: Workspace) => (w.id === id ? { ...w, label: name } : w));
						setWorkspaces(updated);
					}}
					userName={userName}
					onSetUserName={setUserName}
				/>
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
				<main className="flex-1 px-12 py-8 overflow-y-auto overflow-x-hidden">
					<AppGrid
						sites={activeWorkspace?.sites ?? []}
						isEditing={isSitesEditing}
						userName={userName}
						onToggleAddSite={toggleModal}
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
