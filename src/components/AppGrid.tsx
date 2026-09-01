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
					<div className="mb-8 flex items-center justify-between">
						<div className="text-xl text-teal-400 font-comic">Hey {userName}, welcome to your start page</div>
						<button onClick={onToggleAddSite} className="bg-teal-400 hover:bg-teal-500 px-4 py-2 rounded-md text-slate-900 font-semibold transition-colors">
							+ Add Site
						</button>
					</div>
					<div className="flex flex-wrap gap-14 max-w-full">
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
