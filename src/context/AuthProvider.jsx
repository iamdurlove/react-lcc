import { createContext, use, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const storedToken = localStorage.getItem("token");

	const [token, setToken] = useState(storedToken || "");

	const storeToken = (token) => {
		localStorage.setItem("token", token);
		setToken(token);
	};

	const logout = () => {
		localStorage.removeItem("token");
		setToken("");
	};

	return (
		<AuthContext.Provider value={{ storeToken, token, logout }}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => {
	const context = use(AuthContext);
	if (!context) {
		throw new Error("useAuth must be used within an AuthProvider");
	}
	return context;
};

export default AuthProvider;
