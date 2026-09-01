import type { Site } from "../data/presets";
import { DndContext, closestCenter, type DragEndEvent, MouseSensor, TouchSensor, useSensor, useSensors } from "@dnd-kit/core";
import { SortableContext, rectSortingStrategy, arrayMove } from "@dnd-kit/sortable";
import { restrictToWindowEdges } from "@dnd-kit/modifiers";
import AppCard from "./AppCard";

interface AppGridProps {
	sites: Site[];
	isEditing: boolean;
	userName: string;
	onToggleAddSite: () => void;
	onRemove: (url: string) => void;
	onReorder: (sites: Site[]) => void;
}

function AppGrid({ sites, isEditing, userName, onToggleAddSite, onRemove, onReorder }: AppGridProps) {
	const sensors = useSensors(
		useSensor(MouseSensor, {
			activationConstraint: {
				distance: 1,
			},
		}),
		useSensor(TouchSensor),
	);

	const handleDragEnd = (event: DragEndEvent) => {
		const { active, over } = event;
		if (over && active.id !== over.id) {
			const oldIndex = sites.findIndex((s) => s.url === active.id);
			const newIndex = sites.findIndex((s) => s.url === over.id);
			onReorder(arrayMove(sites, oldIndex, newIndex));
		}
	};

	return (
		<>
			<DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd} modifiers={[restrictToWindowEdges]}>
				<SortableContext items={sites.map((s) => s.url)} strategy={rectSortingStrategy}>
					<div className="mb-12 flex items-center justify-between">
						<div className="text-3xl font-light text-slate-200 tracking-tight">
							Hey <span className="font-semibold text-teal-400">{userName}</span>, welcome to your start page
						</div>
						<button onClick={onToggleAddSite} className="bg-teal-500 hover:bg-teal-600 px-5 py-2.5 rounded-lg text-slate-900 font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-teal-500/20 active:scale-95">
							+ Add Site
						</button>
					</div>
					<div className="flex flex-wrap gap-8 max-w-full">
						{sites.map((site) => (
							<AppCard key={`${site.name}-${site.url}`} site={site} isEditing={isEditing} onRemove={onRemove} />
						))}
					</div>
				</SortableContext>
			</DndContext>
		</>
	);
}

export default AppGrid;
