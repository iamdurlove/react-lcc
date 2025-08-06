import { useEffect, useState } from "react";

const UseState = () => {
	const [count, setCount] = useState(0);

	function handleIncrease() {
		setCount(count + 1);
	}

	function handleDecrease() {
		setCount(count - 1);
	}

	useEffect(() => {
		console.log("The component mounted");
	}, [count]);

	console.log(count);
	return (
		<div>
			{count} <br />
			<button onClick={handleIncrease} type="button">
				Increase
			</button>
			<button onClick={handleDecrease} type="button">
				Decrease
			</button>
		</div>
	);
};

export default UseState;
