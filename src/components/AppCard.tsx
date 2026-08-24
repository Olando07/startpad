import { useState } from "react";
import type { Site } from "../data/presets";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

interface AppCardProps {
	site: Site;
	isEditing: boolean;
	onRemove: (url: string) => void;
}

function AppCard({ site, isEditing, onRemove }: AppCardProps) {
	const [iconUrl] = useState<string>(`https://www.google.com/s2/favicons?domain=${site.url}&sz=64`);

	const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: site.url });

	const style = {
		transform: CSS.Transform.toString(transform),
		transition,
	};

	return (
		<div ref={setNodeRef} style={style} {...(isEditing ? { ...attributes, ...listeners } : {})} className="relative flex flex-col w-24 items-center gap-2 p-2 rounded-xl bg-slate-700 hover:bg-slate-600 cursor-pointer transition-colors" onClick={() => window.open(site.url, "_blank")}>
			{isEditing && (
				<button
					onClick={(e) => {
						e.stopPropagation();
						onRemove(site.url);
					}}
					className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 rounded-full text-white text-xs flex items-center justify-center hover:bg-red-400"
				>
					×
				</button>
			)}
			<div className="w-12 h-14 rounded-lg flex items-center justify-center">
				<img src={iconUrl} alt={site.name} className="w-12 h-12" />
			</div>
			<p className="text-md text-slate-200 text-center">{site.name}</p>
		</div>
	);
}

export default AppCard;
