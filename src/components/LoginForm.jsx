import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

const API = "http://194.238.22.66:8003";

const LoginForm = () => {
	const navigate = useNavigate();

	const { storeToken } = useAuth();

	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
		},
		validationSchema: Yup.object({
			email: Yup.string().email("Invalid email address").required("Required"),
			password: Yup.string().required("Password is required"),
		}),
		onSubmit: async (values) => {
			try {
				const response = await fetch(API + "/api/auth/login", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(values),
				});
				const data = await response.json();
				if (response.ok) {
					toast.success(data.msg || "Login successful!");
					storeToken(data.token);
					navigate("/dashboard"); // Redirect to dashboard or home page
				} else {
					toast.error(data.message || data.msg || "Login failed!");
				}
			} catch (error) {
				toast.error("Error logging in");
			}
		},
	});

	return (
		<div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
			<div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
				<div className="px-6 py-8">
					<h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
						Sign In
					</h2>
					<form onSubmit={formik.handleSubmit} className="space-y-6">
						<div>
							<label
								htmlFor="email"
								className="block text-sm font-medium text-gray-700 mb-1"
							>
								Email
							</label>
							<input
								type="email"
								id="email"
								{...formik.getFieldProps("email")}
								className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
									formik.touched.email && formik.errors.email
										? "border-red-500"
										: "border-gray-300"
								}`}
								placeholder="Enter your email"
							/>
							{formik.touched.email && formik.errors.email && (
								<p className="text-red-500 text-sm mt-1">
									{formik.errors.email}
								</p>
							)}
						</div>
						<div>
							<label
								htmlFor="password"
								className="block text-sm font-medium text-gray-700 mb-1"
							>
								Password
							</label>
							<input
								type="password"
								id="password"
								{...formik.getFieldProps("password")}
								className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
									formik.touched.password && formik.errors.password
										? "border-red-500"
										: "border-gray-300"
								}`}
								placeholder="Enter your password"
							/>
							{formik.touched.password && formik.errors.password && (
								<p className="text-red-500 text-sm mt-1">
									{formik.errors.password}
								</p>
							)}
						</div>
						<button
							type="submit"
							className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200 font-medium"
						>
							Sign In
						</button>
					</form>
					<div className="mt-6 text-center">
						<p className="text-sm text-gray-600">
							Don't have an account?{" "}
							<a
								href="#"
								className="text-blue-600 hover:text-blue-500 font-medium"
							>
								Register
							</a>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LoginForm;
