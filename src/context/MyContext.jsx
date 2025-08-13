import { createContext } from "react";

export const LearnContext = createContext();

const college = "Lumbini City College";

const MyContext = ({ children }) => {
	return (
		<LearnContext.Provider value={{ college }}>
			{children}
		</LearnContext.Provider>
	);
};

export default MyContext;
