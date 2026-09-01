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
		<div ref={setNodeRef} style={style} {...(isEditing ? { ...attributes, ...listeners } : {})} className="relative flex flex-col w-24 items-center gap-2 p-3 rounded-xl bg-slate-800 bg-opacity-40 hover:bg-opacity-60 hover:shadow-lg hover:shadow-teal-500/10 cursor-pointer transition-all duration-200 group border border-slate-700 border-opacity-20" onClick={() => window.open(site.url, "_blank")}>
			{isEditing && (
				<button
					onClick={(e) => {
						e.stopPropagation();
						onRemove(site.url);
					}}
					className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 hover:bg-red-600 rounded-full text-white text-sm flex items-center justify-center transition-all duration-200 shadow-lg"
				>
					×
				</button>
			)}
			<div className="w-12 h-12 rounded-lg flex items-center justify-center bg-slate-700 bg-opacity-30 group-hover:bg-opacity-50 transition-all">
				<img src={iconUrl} alt={site.name} className="w-10 h-10" />
			</div>
			<p className="text-xs text-slate-300 text-center line-clamp-2 font-medium">{site.name}</p>
		</div>
	);
}

export default AppCard;
