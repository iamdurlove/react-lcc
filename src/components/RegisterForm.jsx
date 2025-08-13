import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";

const RegisterForm = () => {
	const [imagePreview, setImagePreview] = useState(null);

	const API = "http://194.238.22.66:8003";

	async function postData(formData) {
		try {
			const response = await fetch(API + "/api/auth/register", {
				method: "POST",
				body: formData,
			});
			if (response.ok) {
				const data = await response.json();
				console.log("Response data:", data);
				toast.success(data.msg);
			}
		} catch (error) {
			toast.error("error posting data");
			console.error("Error posting data:", error);
		}
	}

	const formik = useFormik({
		initialValues: {
			username: "",
			email: "",
			phone: "",
			password: "",
			confirmPassword: "",
			image: null,
		},
		validationSchema: Yup.object({
			username: Yup.string()
				.min(3, "Must be 3 characters or more")
				.max(20, "Must be 20 characters or less")
				.required("Required"),
			email: Yup.string().email("Invalid email address").required("Required"),
			phone: Yup.string()
				.matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits")
				.required("Required"),
			password: Yup.string()
				.min(8, "Must be at least 8 characters")
				.matches(
					/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
					"Must contain uppercase, lowercase and number"
				)
				.required("Required"),
			confirmPassword: Yup.string()
				.oneOf([Yup.ref("password"), null], "Passwords must match")
				.required("Required"),
			image: Yup.mixed().required("Profile image is required"),
		}),
		onSubmit: async (values) => {
			console.log("Form data:", values);
			const formData = new FormData();
			Object.keys(values).forEach((key) => {
				formData.append(key, values[key]);
			});
			await postData(formData);
		},
	});

	const handleImageChange = (event) => {
		const file = event.target.files[0];
		if (file) {
			formik.setFieldValue("image", file);
			const reader = new FileReader();
			reader.onload = (e) => {
				setImagePreview(e.target.result);
			};
			reader.readAsDataURL(file);
		}
	};

	return (
		<div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
			<div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
				<div className="px-6 py-8">
					<h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
						Create Account
					</h2>

					<form onSubmit={formik.handleSubmit} className="space-y-6">
						{/* Profile Image Upload */}
						<div className="flex flex-col items-center">
							<div className="w-24 h-24 border-2 border-dashed border-gray-300 rounded-full flex items-center justify-center mb-4 overflow-hidden">
								{imagePreview ? (
									<img
										src={imagePreview}
										alt="Preview"
										className="w-full h-full object-cover rounded-full"
									/>
								) : (
									<span className="text-gray-400 text-sm">Photo</span>
								)}
							</div>
							<input
								type="file"
								accept="image/*"
								onChange={handleImageChange}
								className="hidden"
								id="image-upload"
							/>
							<label
								htmlFor="image-upload"
								className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-600 transition duration-200"
							>
								Upload Photo
							</label>
							{formik.touched.image && formik.errors.image && (
								<p className="text-red-500 text-sm mt-1">
									{formik.errors.image}
								</p>
							)}
						</div>

						{/* Username */}
						<div>
							<label
								htmlFor="username"
								className="block text-sm font-medium text-gray-700 mb-1"
							>
								Username
							</label>
							<input
								type="text"
								id="username"
								{...formik.getFieldProps("username")}
								className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
									formik.touched.username && formik.errors.username
										? "border-red-500"
										: "border-gray-300"
								}`}
								placeholder="Enter your username"
							/>
							{formik.touched.username && formik.errors.username && (
								<p className="text-red-500 text-sm mt-1">
									{formik.errors.username}
								</p>
							)}
						</div>

						{/* Email */}
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

						{/* Phone */}
						<div>
							<label
								htmlFor="phone"
								className="block text-sm font-medium text-gray-700 mb-1"
							>
								Phone Number
							</label>
							<input
								type="tel"
								id="phone"
								{...formik.getFieldProps("phone")}
								className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
									formik.touched.phone && formik.errors.phone
										? "border-red-500"
										: "border-gray-300"
								}`}
								placeholder="Enter your phone number"
							/>
							{formik.touched.phone && formik.errors.phone && (
								<p className="text-red-500 text-sm mt-1">
									{formik.errors.phone}
								</p>
							)}
						</div>

						{/* Password */}
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

						{/* Confirm Password */}
						<div>
							<label
								htmlFor="confirmPassword"
								className="block text-sm font-medium text-gray-700 mb-1"
							>
								Confirm Password
							</label>
							<input
								type="password"
								id="confirmPassword"
								{...formik.getFieldProps("confirmPassword")}
								className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
									formik.touched.confirmPassword &&
									formik.errors.confirmPassword
										? "border-red-500"
										: "border-gray-300"
								}`}
								placeholder="Confirm your password"
							/>
							{formik.touched.confirmPassword &&
								formik.errors.confirmPassword && (
									<p className="text-red-500 text-sm mt-1">
										{formik.errors.confirmPassword}
									</p>
								)}
						</div>

						{/* Submit Button */}
						<button
							type="submit"
							className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200 font-medium"
						>
							Create Account
						</button>
					</form>

					<div className="mt-6 text-center">
						<p className="text-sm text-gray-600">
							Already have an account?{" "}
							<a
								href="#"
								className="text-blue-600 hover:text-blue-500 font-medium"
							>
								Sign in
							</a>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RegisterForm;
