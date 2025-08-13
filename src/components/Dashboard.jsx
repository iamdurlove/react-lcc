import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

const Dashboard = () => {
	const user = "Nishant Kandel";

	const navigate = useNavigate();

	const { logout, token } = useAuth();

	const handleLogout = () => {
		logout();
		navigate("/login"); // Redirect to login page after logout
	};

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
