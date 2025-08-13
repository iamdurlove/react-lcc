import { useEffect, useState } from "react";
import Card from "../components/Card";
import Movies from "../data/Movies";
import Loader from "../components/Loader";

const MoviesPage = () => {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 3000);
	});

	if (loading) return <Loader />;
	return (
		<>
			<h1 style={{ textAlign: "center" }}>Movies Page</h1>
			<div className="app-container">
				{Movies.map((item, i) => (
					<Card
						key={item.id}
						title={item.title}
						release={item.release}
						director={item.director}
						image={item.image}
					/>
				))}
			</div>
		</>
	);
};

export default MoviesPage;
