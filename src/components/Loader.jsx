import { DotLoader } from "react-spinners";

const Loader = () => {
	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				height: "85vh",
				width: "100%",
			}}
		>
			<DotLoader
				style={{
					transform: "scale(2)",
				}}
			/>
		</div>
	);
};

export default Loader;
