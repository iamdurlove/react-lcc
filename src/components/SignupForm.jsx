import { useFormik } from "formik";
import * as Yup from "yup";

const SignupForm = () => {
	const formik = useFormik({
		initialValues: {
			firstName: "",
			lastName: "",
			email: "",
		},
		validationSchema: Yup.object({
			firstName: Yup.string()
				.min(2, "Must be 2 characters or more")
				.max(15, "Must be 15 characters or less")
				.required("Required"),
			lastName: Yup.string()
				.max(20, "Must be 20 characters or less")
				.required("Required"),
			email: Yup.string().email("Invalid email address").required("Required"),
		}),
		onSubmit: (values) => {
			alert(JSON.stringify(values, null, 2));
		},
	});

	const styles = {
		formContainer: {
			maxWidth: "400px",
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
		inputFocus: {
			borderColor: "#3498db",
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
			backgroundColor: "#3498db",
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
			backgroundColor: "#2980b9",
		},
	};

	return (
		<div style={styles.formContainer}>
			<h2 style={styles.title}>Sign Up</h2>
			<form onSubmit={formik.handleSubmit}>
				<div style={styles.formGroup}>
					<label htmlFor="firstName" style={styles.label}>
						First Name
					</label>
					<input
						id="firstName"
						name="firstName"
						type="text"
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.firstName}
						style={{
							...styles.input,
							...(formik.touched.firstName && formik.errors.firstName
								? styles.inputError
								: {}),
						}}
					/>
					{formik.touched.firstName && formik.errors.firstName ? (
						<div style={styles.errorMessage}>{formik.errors.firstName}</div>
					) : null}
				</div>

				<div style={styles.formGroup}>
					<label htmlFor="lastName" style={styles.label}>
						Last Name
					</label>
					<input
						id="lastName"
						name="lastName"
						type="text"
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.lastName}
						style={{
							...styles.input,
							...(formik.touched.lastName && formik.errors.lastName
								? styles.inputError
								: {}),
						}}
					/>
					{formik.touched.lastName && formik.errors.lastName ? (
						<div style={styles.errorMessage}>{formik.errors.lastName}</div>
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
					Submit
				</button>
			</form>
		</div>
	);
};

export default SignupForm;
