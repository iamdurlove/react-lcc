import { createContext, use, useState } from "react";

export const Theme = createContext();

const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState("light");
	return (
		<Theme.Provider value={{ theme, setTheme }}>{children}</Theme.Provider>
	);
};

export const useTheme = () => {
	const themeContextValue = use(Theme);
	if (!themeContextValue) {
		throw new Error("useTheme must be used within an ThemeProvider");
	}
	return themeContextValue;
};

export default ThemeProvider;
