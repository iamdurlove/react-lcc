import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";

const ContactForm = () => {
	const API = "http://10.10.1.214:5000";

	async function postData(formData) {
		try {
			const response = await fetch(API + "/api/form/contact", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
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
			name: "",
			email: "",
			message: "",
		},
		validationSchema: Yup.object({
			name: Yup.string()
				.min(2, "Must be 2 characters or more")
				.max(50, "Must be 50 characters or less")
				.required("Required"),
			email: Yup.string().email("Invalid email address").required("Required"),
			message: Yup.string()
				.min(10, "Must be at least 10 characters")
				.max(500, "Must be 500 characters or less")
				.required("Required"),
		}),
		onSubmit: async (values) => {
			const data = await postData(values);

			formik.resetForm();

			console.log("Form data", values);
		},
	});

	const styles = {
		formContainer: {
			maxWidth: "500px",
			margin: "2rem auto",
			padding: "2rem",
			backgroundColor: "#ffffff",
			borderRadius: "12px",
			boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
			border: "1px solid #e1e5e9",
		},
		title: {
			textAlign: "center",
			marginBottom: "1.5rem",
			color: "#2c3e50",
			fontSize: "1.8rem",
			fontWeight: "600",
		},
		formGroup: {
			marginBottom: "1.2rem",
		},
		label: {
			display: "block",
			marginBottom: "0.5rem",
			color: "#34495e",
			fontWeight: "500",
			fontSize: "0.9rem",
		},
		input: {
			width: "100%",
			padding: "0.75rem",
			border: "2px solid #e1e5e9",
			borderRadius: "8px",
			fontSize: "1rem",
			transition: "border-color 0.3s ease",
			outline: "none",
			boxSizing: "border-box",
		},
		textarea: {
			width: "100%",
			padding: "0.75rem",
			border: "2px solid #e1e5e9",
			borderRadius: "8px",
			fontSize: "1rem",
			transition: "border-color 0.3s ease",
			outline: "none",
			boxSizing: "border-box",
			minHeight: "120px",
			resize: "vertical",
		},
		inputError: {
			borderColor: "#e74c3c",
		},
		errorMessage: {
			color: "#e74c3c",
			fontSize: "0.8rem",
			marginTop: "0.3rem",
			fontWeight: "500",
		},
		submitButton: {
			width: "100%",
			padding: "0.9rem",
			backgroundColor: "#27ae60",
			color: "white",
			border: "none",
			borderRadius: "8px",
			fontSize: "1rem",
			fontWeight: "600",
			cursor: "pointer",
			transition: "background-color 0.3s ease",
			marginTop: "0.5rem",
		},
		submitButtonHover: {
			backgroundColor: "#229954",
		},
	};

	return (
		<div style={styles.formContainer}>
			<h2 style={styles.title}>Contact Us</h2>
			<form onSubmit={formik.handleSubmit}>
				<div style={styles.formGroup}>
					<label htmlFor="name" style={styles.label}>
						Name
					</label>
					<input
						id="name"
						name="name"
						type="text"
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.name}
						style={{
							...styles.input,
							...(formik.touched.name && formik.errors.name
								? styles.inputError
								: {}),
						}}
					/>
					{formik.touched.name && formik.errors.name ? (
						<div style={styles.errorMessage}>{formik.errors.name}</div>
					) : null}
				</div>

				<div style={styles.formGroup}>
					<label htmlFor="email" style={styles.label}>
						Email Address
					</label>
					<input
						id="email"
						name="email"
						type="email"
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.email}
						style={{
							...styles.input,
							...(formik.touched.email && formik.errors.email
								? styles.inputError
								: {}),
						}}
					/>
					{formik.touched.email && formik.errors.email ? (
						<div style={styles.errorMessage}>{formik.errors.email}</div>
					) : null}
				</div>

				<div style={styles.formGroup}>
					<label htmlFor="message" style={styles.label}>
						Message
					</label>
					<textarea
						id="message"
						name="message"
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.message}
						style={{
							...styles.textarea,
							...(formik.touched.message && formik.errors.message
								? styles.inputError
								: {}),
						}}
						placeholder="Write your message here..."
					/>
					{formik.touched.message && formik.errors.message ? (
						<div style={styles.errorMessage}>{formik.errors.message}</div>
					) : null}
				</div>

				<button
					type="submit"
					style={styles.submitButton}
					onMouseEnter={(e) =>
						(e.target.style.backgroundColor =
							styles.submitButtonHover.backgroundColor)
					}
					onMouseLeave={(e) =>
						(e.target.style.backgroundColor =
							styles.submitButton.backgroundColor)
					}
				>
					Send Message
				</button>
			</form>
		</div>
	);
};

export default ContactForm;
