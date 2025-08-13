import { useEffect, useState } from "react";

const FetchData = () => {
	const [data, setData] = useState([]);

	const API = "https://jsonplaceholder.typicode.com/todos";

	async function getData() {
		try {
			const response = await fetch(API);
			// console.log(response);
			if (response.ok) {
				const responseData = await response.json();
				// console.log(responseData);
				setData(responseData);
			}
		} catch (error) {
			console.log(error);
		}
	}

	useEffect(() => {
		getData();
	}, []);

	return <div>FetchData </div>;
};

export default FetchData;
