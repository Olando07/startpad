import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faMinus, faUpRightAndDownLeftFromCenter } from "@fortawesome/free-solid-svg-icons";

function TitleBar() {
	return (
		<div className="window-btns w-screen flex items-center justify-center bg-transparent border-b border-slate-600" style={{ WebkitAppRegion: "drag" } as React.CSSProperties}>
			<h1 className="py-2">Startpad</h1>
			<div className="absolute right-3 window-ctrl gap-2 flex flex-row items-center justify-center">
				<FontAwesomeIcon icon={faMinus} className="text-yellow-500 hover:text-yellow-300 hover:drop-shadow-[0_0_6px_rgb(234,179,8)] cursor-pointer transition-all duration-200" style={{ WebkitAppRegion: "no-drag" } as React.CSSProperties} onClick={window.api.minimize} />
				<FontAwesomeIcon icon={faUpRightAndDownLeftFromCenter} className="text-teal-500 hover:text-teal-300 hover:drop-shadow-[0_0_6px_rgb(20,184,166)] cursor-pointer transition-all duration-200" style={{ WebkitAppRegion: "no-drag" } as React.CSSProperties} onClick={window.api.maximize} />
				<FontAwesomeIcon icon={faXmark} className="text-red-500 hover:text-red-300 hover:drop-shadow-[0_0_6px_rgb(239,68,68)] cursor-pointer transition-all duration-200" style={{ WebkitAppRegion: "no-drag" } as React.CSSProperties} onClick={window.api.close} />
			</div>
		</div>
	);
}

export default TitleBar;
