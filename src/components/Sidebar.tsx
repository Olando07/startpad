import React from "react";
import type { Workspace } from "../data/presets";

interface SidebarProps {
	workspaces: Workspace[];
	activeId: string;
	isEditing: boolean;
	onSelect: (id: string) => void;
	onToggleEdit: () => void;
	onToggleModal: () => void;
}

function Sidebar({ workspaces, activeId, isEditing, onSelect, onToggleEdit, onToggleModal }: SidebarProps) {
	return (
		<aside className="flex flex-col bg-slate-800 w-60 h-screen border-r border-slate-600">
			<div className="flex-1">
				{workspaces.map((workspace) => (
					<button key={workspace.id} onClick={() => onSelect(workspace.id)} className={`w-full py-2 pl-6 pr-4 rounded-sm text-left text-md transitions-colors border-y border-slate-600 ${workspace.id === activeId ? "bg-teal-400 text-slate-200" : "text-slate-200 hover:bg-slate-700"}`}>
						{workspace.label}
					</button>
				))}
			</div>
			<div className="flex flex-row p-5 gap-5 h-30">
				<button className={`px-4 py-2 rounded-md ${isEditing ? "bg-teal-400 text-slate-900" : "bg-slate-700 text-teal-400"} hover:bg-slate-600`} onClick={onToggleEdit}>
					{isEditing ? "Done" : "Edit"}
				</button>
				<button className="px-4 py-2 rounded-md bg-slate-700 text-teal-400 hover:bg-slate-600" onClick={onToggleModal}>
					+
				</button>
			</div>
		</aside>
	);
}

export default Sidebar;
