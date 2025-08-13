import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import { useEffect } from "react";

const Dashboard = () => {
	const navigate = useNavigate();

	const { logout, token } = useAuth();

	const [user, setUser] = useState({});

	const API = "http://194.238.22.66:8003";

	async function fetchUser() {
		try {
			const response = await fetch(API + "/api/auth/user", {
				headers: {
					"Content-Type": "application/json",
					Authorization: "Bearer " + token,
				},
			});
			if (response.ok) {
				const responseData = await response.json();
				setUser(responseData.userData);
			}
		} catch (error) {
			console.log(error);
		}
	}

	console.log(user);

	const handleLogout = () => {
		logout();
		navigate("/login"); // Redirect to login page after logout
	};

	useEffect(() => {
		if (!token) navigate("/login"); // Redirect to login if not authenticated
		fetchUser();
	}, []);

	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-100">
			<div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-center">
				<h2 className="text-2xl font-bold mb-4 text-gray-800">
					Welcome, <span className="text-blue-600">{user}</span>
				</h2>
				<p className="mb-8 text-gray-600">
					You are now logged in to your dashboard.
				</p>
				<button
					onClick={handleLogout}
					className="bg-blue-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-blue-700 transition duration-200"
				>
					Logout
				</button>
			</div>
		</div>
	);
};

export default Dashboard;
