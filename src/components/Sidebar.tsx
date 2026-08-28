import type { Workspace } from "../data/presets";
import { useState } from "react";

interface SidebarProps {
	workspaces: Workspace[];
	activeId: string;
	isEditing: boolean;
	onSelect: (id: string) => void;
	onToggleEdit: () => void;
	onToggleModal: () => void;
	onAddWorkspace: (name: string) => void;
	onDeleteWorkspace: (id: string) => void;
	isSitesEditing: boolean;
	onToggleSitesEdit: () => void;
	onRenameWorkspace: (id: string, name: string) => void;
}

function Sidebar({ workspaces, activeId, isEditing, onSelect, onToggleEdit, onToggleModal, onAddWorkspace, onDeleteWorkspace, isSitesEditing, onToggleSitesEdit, onRenameWorkspace }: SidebarProps) {
	const [isAddingWorkspace, setIsAddingWorkspace] = useState(false);
	const [newWorkspaceName, setNewWorkspaceName] = useState("");

	const [renamingId, setRenamingId] = useState<string | null>(null);
	const [renameValue, setRenameValue] = useState("");

	return (
		<aside className="flex flex-col bg-slate-800 w-60 h-screen border-r border-slate-600">
			<div className="flex-1">
				{workspaces.map((workspace) => (
					<div key={workspace.id} className={`flex items-center rounded-sm border-y border-slate-600 ${workspace.id === activeId ? "bg-teal-400" : "hover:bg-slate-700"}`}>
						{workspace.id === renamingId ? (
							<input
								autoFocus
								value={renameValue}
								onChange={(e) => setRenameValue(e.target.value)}
								onKeyDown={(e) => {
									if (e.key === "Enter") {
										onRenameWorkspace(workspace.id, renameValue);
										setRenamingId(null);
									}
									if (e.key === "Escape") setRenamingId(null);
								}}
								className="flex-1 min-w-0 px-2 py-1 bg-transparent text-slate-200 outline-none text-sm"
							/>
						) : (
							<button onClick={() => onSelect(workspace.id)} className="flex-1 min-w-0 py-2 pl-6 pr-4 bg-transparent text-left text-md text-slate-200 transitions-colors">
								{workspace.label}
							</button>
						)}
						{isEditing && (
							<div className="flex shrink-0 bg-transparent">
								<button
									onClick={() => {
										setRenamingId(workspace.id);
										setRenameValue(workspace.label);
									}}
									className="bg-transparent px-2 text-slate-400 hover:text-slate-200 text-md"
								>
									✏️
								</button>
								<button onClick={() => onDeleteWorkspace(workspace.id)} className="bg-transparent px-2 text-red-400 hover:text-red-300 text-md">
									×
								</button>
							</div>
						)}
					</div>
				))}
			</div>
			<div className="flex flex-col p-5 gap-5 h-30">
				<button onClick={onToggleEdit} className={`px-4 py-2 rounded-md ${isEditing ? "bg-teal-400 text-slate-900" : "bg-slate-700 text-teal-400"} hover:bg-slate-600`}>
					{isEditing ? "Done" : "Edit Workspaces"}
				</button>
				<button onClick={onToggleSitesEdit} className={`px-4 py-2 rounded-md ${isSitesEditing ? "bg-teal-400 text-slate-900" : "bg-slate-700 text-teal-400"} hover:bg-slate-600`}>
					{isSitesEditing ? "Done" : "Edit Sites"}
				</button>
				{isAddingWorkspace ? (
					<input
						autoFocus
						type="text"
						value={newWorkspaceName}
						onChange={(e) => setNewWorkspaceName(e.target.value)}
						onKeyDown={(e) => {
							if (e.key === "Enter" && newWorkspaceName.trim()) {
								onAddWorkspace(newWorkspaceName.trim());
								setNewWorkspaceName("");
								setIsAddingWorkspace(false);
							}
							if (e.key === "Escape") {
								setIsAddingWorkspace(false);
								setNewWorkspaceName("");
							}
						}}
						className="px-2 py-1 rounded-md bg-slate-600 text-slate-200 outline-none text-sm w-full"
						placeholder="Workspace name..."
					/>
				) : (
					<button onClick={() => setIsAddingWorkspace(true)} className="px-4 py-2 rounded-md bg-slate-700 text-teal-400 hover:bg-slate-600">
						New
					</button>
				)}
			</div>
		</aside>
	);
}

export default Sidebar;
