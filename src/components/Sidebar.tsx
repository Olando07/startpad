import React from "react";
import { Workspace } from "../data/presets";

interface SidebarProps {
	workspaces: Workspace[];
	activeId: string;
	onSelect: (id: string) => void;
}

function Sidebar({ workspaces, activeId, onSelect }: SidebarProps) {
	return (
		<aside className="flex flex-col bg-slate-800 w-48 h-screen border-r border-slate-600">
			{workspaces.map((workspace) => (
				<button key={workspace.id} onClick={() => onSelect(workspace.id)} className={`py-2 pl-6 pr-4 rounded-sm text-left font-medium transitions-colors border-y border-slate-600 ${workspace.id === activeId ? "bg-blue-500 text-white" : "text-slate-300 hover:bg-slate-700"}`}>
					{workspace.label}
				</button>
			))}
		</aside>
	);
}

export default Sidebar;
