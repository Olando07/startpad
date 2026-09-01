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
			<div className="modal-content bg-slate-800 bg-opacity-50 rounded-xl flex flex-col border border-slate-700 border-opacity-30 backdrop-blur-sm" onClick={(e) => e.stopPropagation()}>
				<button className="flex justify-end w-full text-sm font-medium text-teal-400 hover:text-teal-300 px-5 py-4 transition-colors" onClick={onClose}>
					Close
				</button>
				<div className="scrollbar-thin scrollbar-thumb-cyan-800 scrollbar-track-sky-100 overflow-y-scroll">
					<div className="flex justify-center px-6 pt-4">
						<input autoFocus type="text" placeholder="Search for a site..." value={query} onChange={(e) => setQuery(e.target.value)} className="p-3 rounded-lg bg-slate-800 bg-opacity-60 text-slate-200 outline-none w-full focus:ring-2 focus:ring-teal-500 transition-all" />
					</div>
					<div className="results overflow-y-auto m-auto pt-2 pb-10 flex flex-col justify-center gap-2 px-4">
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
								className={`result-divs w-full flex items-center gap-3 p-3 rounded-lg transition-all duration-200 ${isAdded(site) ? "opacity-50 cursor-not-allowed bg-slate-700 bg-opacity-30" : "bg-slate-700 bg-opacity-30 hover:bg-opacity-50 cursor-pointer"}`}
							>
								<img src={`https://www.google.com/s2/favicons?domain=${site.url}&sz=32`} alt={site.name} className="w-6 h-6 rounded" />
								<span className="text-slate-200 text-sm font-medium flex-1">{site.name}</span>
								<span className="text-slate-400 text-xs font-medium">{site.category}</span>
								{isAdded(site) && <span className="text-teal-400 text-sm">✓</span>}
							</div>
						))}
						{query.length > 0 && results.length === 0 && <p className="text-slate-500 text-sm text-center py-4">No results found</p>}
					</div>
				</div>
			</div>
		</div>
	);
}
