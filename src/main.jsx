import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Flip, ToastContainer } from "react-toastify";
import MyContext from "./context/MyContext.jsx";
import ThemeProvider from "./context/ThemeContext.jsx";
import AuthProvider from "./context/AuthProvider.jsx";

createRoot(document.getElementById("root")).render(
	<>
		{/* <StrictMode> */}
		<ToastContainer
			position="top-center"
			autoClose={5000}
			hideProgressBar={false}
			newestOnTop={false}
			closeOnClick={false}
			rtl={false}
			pauseOnFocusLoss
			draggable
			pauseOnHover
			theme="dark"
			transition={Flip}
		/>

		<AuthProvider>
			<MyContext>
				<ThemeProvider>
					<App />
				</ThemeProvider>
			</MyContext>
		</AuthProvider>
		{/* </StrictMode> */}
	</>
);
