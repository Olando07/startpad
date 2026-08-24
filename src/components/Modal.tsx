import { useState } from "react";
import type { LibrarySite } from "../data/site-library";
import { siteLibrary } from "../data/site-library";
import toast from "react-hot-toast";

interface ModalProps {
	onClose: () => void;
	onAdd: (site: LibrarySite) => void;
	currentSites: { url: string }[];
}

export default function Modal({ onClose, onAdd, currentSites }: ModalProps) {
	const [query, setQuery] = useState("");

	const results = query.length > 0 ? siteLibrary.filter((s) => s.name.toLowerCase().includes(query.toLowerCase())) : [];

	const isAdded = (site: LibrarySite) => currentSites.some((s) => s.url === site.url);

	return (
		<div className="modal-overlay absolute" onClick={onClose}>
			<div className="modal-content bg-slate-800 rounded-lg flex flex-col " onClick={(e) => e.stopPropagation()}>
				<button className="flex justify-end w-full text-md text-teal-400 px-3 py-1 mb-5" onClick={onClose}>
					Close
				</button>
				<div className="scrollbar-thin scrollbar-thumb-cyan-800 scrollbar-track-sky-100 overflow-y-scroll">
					<div className="flex justify-center px-6 my-2">
						<input autoFocus type="text" placeholder="Search for a site..." value={query} onChange={(e) => setQuery(e.target.value)} className="p-2 rounded-lg bg-slate-700 text-slate-200 outline-none w-full" />
					</div>
					<div className="results overflow-y-auto m-auto pt-2 pb-10 flex flex-col justify-center gap-2">
						{results.map((site) => (
							<div
								key={site.url}
								onClick={() => {
									if (!isAdded(site)) {
										onAdd(site);
										toast.success(`${site.name} added to workspace`, {
											duration: 3000,
											style: {
												background: "#1e293b",
												color: "#e2e8f0",
												border: "1px solid #475569",
											},
										});
									}
								}}
								className={`result-divs w-full flex items-center gap-3 p-3 rounded-lg bg-slate-700 hover:bg-slate-900 cursor-pointer ${isAdded(site) ? "opacity-50 cursor-not-allowed" : "hover:bg-slate-700"}`}
							>
								<img src={`https://www.google.com/s2/favicons?domain=${site.url}&sz=32`} alt={site.name} className="w-6 h-6" />
								<span className="text-slate-200 text-sm">{site.name}</span>
								<span className="ml-auto text-slate-300 text-xs">{site.category}</span>
								{isAdded(site) && <span className="text-teal-400">✓</span>}
							</div>
						))}
						{query.length > 0 && results.length === 0 && <p className="text-slate-500 text-sm text-center py-4">No results found</p>}
					</div>
				</div>
			</div>
		</div>
	);
}
