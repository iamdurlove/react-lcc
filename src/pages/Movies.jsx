import Card from "../components/Card";
import Movies from "../data/Movies";

const MoviesPage = () => {
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
