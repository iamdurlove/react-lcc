import { useEffect } from "react";

const UseEffect = () => {
	useEffect(() => {
		console.log("The component mounted");
	}, []);

	return <div>UseEffect</div>;
};

export default UseEffect;
