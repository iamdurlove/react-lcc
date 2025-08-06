import { useState } from "react";

const UseState2 = () => {
	const [toggle, setToggle] = useState(true);

	function handleToggle() {
		setToggle(!toggle);
	}

	return (
		<div>
			{toggle ? "ON" : "OFF"} <br />
			<button onClick={handleToggle}>Toggle</button>
		</div>
	);
};

export default UseState2;
