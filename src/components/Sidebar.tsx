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
}

function Sidebar({ workspaces, activeId, isEditing, onSelect, onToggleEdit, onToggleModal }: SidebarProps) {
	const [isAddingWorkspace, setIsAddingWorkspace] = useState(false);
	const [newWorkspaceName, setNewWorkspaceName] = useState("");

	return (
		<aside className="flex flex-col bg-slate-800 w-60 h-screen border-r border-slate-600">
			<div className="flex-1">
				{workspaces.map((workspace) => (
					<div key={workspace.id} className="flex items-center">
						<button onClick={() => onSelect(workspace.id)} className={`w-full py-2 pl-6 pr-4 rounded-sm text-left text-md transitions-colors border-y border-slate-600 ${workspace.id === activeId ? "bg-teal-400 text-slate-200" : "text-slate-200 hover:bg-slate-700"}`}>
							{workspace.label}
						</button>
						{isEditing && (
							<button onClick={() => onDeleteWorkspace(workspace.id)} className="px-2 py-1 bg-transparent text-red-400 hover:text-red-300">
								×
							</button>
							// TODO:
							// fix input box for workspace name
							// fix style for deleting workspace
							// rework how editing workspaces and sites works
						)}
					</div>
				))}
			</div>
			<div className="flex flex-row p-5 gap-5 h-30">
				<button className={`px-4 py-2 rounded-md ${isEditing ? "bg-teal-400 text-slate-900" : "bg-slate-700 text-teal-400"} hover:bg-slate-600`} onClick={onToggleEdit}>
					{isEditing ? "Done" : "Edit"}
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
