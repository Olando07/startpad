import React from "react";
import type { Site } from "../data/presets";
import { DndContext, closestCenter, type DragEndEvent, MouseSensor, TouchSensor, useSensor, useSensors } from "@dnd-kit/core";
import { SortableContext, rectSortingStrategy, arrayMove } from "@dnd-kit/sortable";
import { restrictToWindowEdges } from "@dnd-kit/modifiers";
import AppCard from "./AppCard";

interface AppGridProps {
	sites: Site[];
	isEditing: boolean;
	onRemove: (url: string) => void;
	onReorder: (sites: Site[]) => void;
}

function AppGrid({ sites, isEditing, onRemove, onReorder }: AppGridProps) {
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

	const name = "lando";
	return (
		<>
			<DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd} modifiers={[restrictToWindowEdges]}>
				<SortableContext items={sites.map((s) => s.url)} strategy={rectSortingStrategy}>
					<div className="mb-8 text-xl text-teal-400 font-comic">Hey {name}, welcome to your start page</div>
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
