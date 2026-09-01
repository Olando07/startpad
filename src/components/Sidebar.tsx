import type { Workspace } from "../data/presets";
import { useState } from "react";

interface SidebarProps {
	workspaces: Workspace[];
	activeId: string;
	onSelect: (id: string) => void;
	onAddWorkspace: (name: string) => void;
	onDeleteWorkspace: (id: string) => void;
	isSitesEditing: boolean;
	onToggleSitesEdit: () => void;
	onRenameWorkspace: (id: string, name: string) => void;
	userName: string;
	onSetUserName: (name: string) => void;
}

function Sidebar({ workspaces, activeId, onSelect, onAddWorkspace, onDeleteWorkspace, isSitesEditing, onToggleSitesEdit, onRenameWorkspace, userName, onSetUserName }: SidebarProps) {
	const [isAddingWorkspace, setIsAddingWorkspace] = useState(false);
	const [newWorkspaceName, setNewWorkspaceName] = useState("");

	const [renamingId, setRenamingId] = useState<string | null>(null);
	const [renameValue, setRenameValue] = useState("");

	const [confirmAction, setConfirmAction] = useState<{ type: "edit" | "delete"; workspaceId: string } | null>(null);
	const [isEditingName, setIsEditingName] = useState(false);
	const [editNameValue, setEditNameValue] = useState(userName);

	return (
		<aside className="flex flex-col bg-slate-800 w-60 h-screen border-r border-slate-600">
			<div className="p-4 border-b border-slate-600">
				{isEditingName ? (
					<input
						autoFocus
						type="text"
						value={editNameValue}
						onChange={(e) => setEditNameValue(e.target.value)}
						onKeyDown={(e) => {
							if (e.key === "Enter" && editNameValue.trim()) {
								onSetUserName(editNameValue.trim());
								setIsEditingName(false);
							}
							if (e.key === "Escape") {
								setEditNameValue(userName);
								setIsEditingName(false);
							}
						}}
						className="w-full px-2 py-1 rounded bg-slate-700 text-slate-200 outline-none text-sm"
						placeholder="Enter your name..."
					/>
				) : (
					<div className="flex items-center justify-between">
						<span className="text-slate-300 font-semibold">Change name: {userName}</span>
						<button onClick={() => setIsEditingName(true)} className="bg-cyan-600 hover:bg-cyan-500 px-2 py-1 rounded text-slate-900 font-semibold text-xs transition-colors" title="Edit name">
							✏️
						</button>
					</div>
				)}
			</div>
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
						<div className="flex shrink-0 gap-2 mr-2 bg-transparent">
							<button onClick={() => setConfirmAction({ type: "edit", workspaceId: workspace.id })} className="bg-cyan-600 hover:bg-cyan-500 px-1 py-1 rounded text-slate-900 font-semibold text-sm transition-colors" title="Rename workspace">
								✏️
							</button>
							<button onClick={() => setConfirmAction({ type: "delete", workspaceId: workspace.id })} className="bg-red-600 hover:bg-red-500 px-2 py-1 rounded text-white font-semibold text-sm transition-colors" title="Delete workspace">
								×
							</button>
						</div>
					</div>
				))}
			</div>
			<div className="flex flex-col p-5 gap-5 h-30">
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

			{confirmAction && (
				<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
					<div className="bg-slate-800 rounded-lg p-6 border border-slate-600 max-w-sm">
						<h3 className="text-lg font-semibold text-slate-200 mb-4">{confirmAction.type === "edit" ? "Rename Workspace" : "Delete Workspace"}</h3>
						<p className="text-slate-400 mb-6">{confirmAction.type === "edit" ? `Rename "${workspaces.find((w) => w.id === confirmAction.workspaceId)?.label || ""}"?` : `Are you sure you want to delete "${workspaces.find((w) => w.id === confirmAction.workspaceId)?.label || ""}"? This action cannot be undone.`}</p>
						<div className="flex justify-end gap-3">
							<button onClick={() => setConfirmAction(null)} className="px-4 py-2 rounded-md bg-slate-700 text-slate-200 hover:bg-slate-600 transition-colors">
								Cancel
							</button>
							<button
								onClick={() => {
									if (confirmAction.type === "edit") {
										setRenamingId(confirmAction.workspaceId);
										setRenameValue(workspaces.find((w) => w.id === confirmAction.workspaceId)?.label || "");
									} else {
										onDeleteWorkspace(confirmAction.workspaceId);
									}
									setConfirmAction(null);
								}}
								className={`px-4 py-2 rounded-md font-semibold transition-colors ${confirmAction.type === "edit" ? "bg-cyan-600 hover:bg-cyan-500 text-slate-900" : "bg-red-600 hover:bg-red-500 text-white"}`}
							>
								{confirmAction.type === "edit" ? "Rename" : "Delete"}
							</button>
						</div>
					</div>
				</div>
			)}
		</aside>
	);
}

export default Sidebar;
