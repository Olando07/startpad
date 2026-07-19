import React from "react";

function App() {
	const handleTest = () => {
		window.api.launchApp("");
	};
	return (
		<>
			<p>Startpad</p>
			<button onClick={handleTest}>Click me</button>
		</>
	);
}

export default App;
