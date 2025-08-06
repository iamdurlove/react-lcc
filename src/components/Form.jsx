import { toast } from "react-toastify";

const Form = () => {
	const handleSubmit = (e) => {
		e.preventDefault();

		const firstName = e.target.firstName.value;

		const lastName = e.target.lastName.value;
		const email = e.target.email.value;
		const address = e.target.address.value;
		const dob = e.target.dob.value;
		const password = e.target.password.value;
		const cpassword = e.target.cpassword.value;

		if (firstName.length < 3) {
			toast.error("First name must be at least 3 characters long!");
			return;
		}

		if (lastName.length < 3) {
			toast.error("Last name must be at least 3 characters long!");
			return;
		}

		const age = new Date().getFullYear() - new Date(dob).getFullYear();
		if (age < 18) {
			toast.error("You must be at least 18 years old!");
			return;
		}

		if (password !== cpassword) {
			toast.error("Passwords do not match!");
			return;
		}
	};

	return (
		<form
			onSubmit={handleSubmit}
			style={{
				maxWidth: 400,
				margin: "2rem auto",
				padding: 24,
				border: "1px solid #ddd",
				borderRadius: 12,
				background: "#fafafa",
			}}
		>
			<h2 style={{ textAlign: "center" }}>Registration Form</h2>
			<div style={{ marginBottom: 12 }}>
				<label>
					First Name
					<br />
					<input
						type="text"
						name="firstName"
						required
						style={{ width: "100%" }}
					/>
				</label>
			</div>
			<div style={{ marginBottom: 12 }}>
				<label>
					Last Name
					<br />
					<input
						type="text"
						name="lastName"
						required
						style={{ width: "100%" }}
					/>
				</label>
			</div>
			<div style={{ marginBottom: 12 }}>
				<label>
					Email
					<br />
					<input type="email" name="email" required style={{ width: "100%" }} />
				</label>
			</div>
			<div style={{ marginBottom: 12 }}>
				<label>
					Address
					<br />
					<input
						type="text"
						name="address"
						required
						style={{ width: "100%" }}
					/>
				</label>
			</div>
			<div style={{ marginBottom: 12 }}>
				<label>
					Date of Birth
					<br />
					<input type="date" name="dob" required style={{ width: "100%" }} />
				</label>
			</div>
			<div style={{ marginBottom: 16 }}>
				<label>
					Password
					<br />
					<input
						type="password"
						name="password"
						required
						style={{ width: "100%" }}
					/>
				</label>
			</div>
			<div style={{ marginBottom: 16 }}>
				<label>
					Confirm Password
					<br />
					<input
						type="password"
						name="cpassword"
						required
						style={{ width: "100%" }}
					/>
				</label>
			</div>
			<button
				type="submit"
				style={{ width: "100%", padding: 10, fontWeight: "bold" }}
			>
				Submit
			</button>
		</form>
	);
};

export default Form;
