const Card = (props) => {
	return (
		<div
			className="movie-card"
			style={{
				maxWidth: 450,
				border: "1px solid #ddd",
				borderRadius: 16,
				boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
				overflow: "hidden",
				background: "#fff",
				margin: "2rem auto",
			}}
		>
			<img
				src={props.image}
				alt={props.title}
				style={{ width: "100%", height: "320px", objectFit: "cover" }}
			/>
			<div style={{ padding: "1.5rem" }}>
				<h2 style={{ fontSize: "2rem", margin: "0 0 0.5rem 0" }}>
					{props.title}
				</h2>
				<p style={{ margin: "0.5rem 0", color: "#555" }}>
					<strong>Release Date:</strong> {props.release}
				</p>
				<p style={{ margin: "0.5rem 0", color: "#555" }}>
					<strong>Director:</strong> {props.director}
				</p>
				<button>Watch Now</button>
			</div>
		</div>
	);
};

export default Card;
