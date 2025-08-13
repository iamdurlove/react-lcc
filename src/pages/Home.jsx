import { useEffect, useState } from "react";
import Form from "../components/Form";
import Loader from "../components/Loader";
import UseEffect from "../components/UseEffect";
import UseState from "../components/UseState";
import UseState2 from "../components/UseState2";
import FetchData from "../components/FetchData";
import Avengers from "../components/Avengers";

const Home = () => {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 1000);
	});

	if (loading) return <Loader />;

	return (
		<div>
			{/* <UseState /> */}
			{/* <UseState2 /> */}
			{/* <Form /> */}
			{/* <UseEffect /> */}
			{/* <FetchData /> */}
			<Avengers />
		</div>
	);
};

export default Home;
