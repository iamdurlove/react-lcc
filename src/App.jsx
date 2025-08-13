import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Card from "./components/Card";
import CompA from "./components/CompA";
import Conditional from "./components/Conditional";
import Navbar from "./components/Navbar";
import Props from "./components/Props";
import Movies from "./data/Movies";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import MoviesPage from "./pages/Movies";
import SignupForm from "./components/SignupForm";
import Register from "./pages/Register";
import LoginForm from "./components/LoginForm";
import Dashboard from "./components/Dashboard";

function App() {
	return (
		<>
			{/* <h1 className="my-class">Hello World</h1> */}
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/blog" element={<Blog />} />
					<Route path="/movies" element={<MoviesPage />} />
					<Route path="/register" element={<Register />} />
					<Route path="/login" element={<LoginForm />} />
					<Route path="/dashboard" element={<Dashboard />} />
				</Routes>
			</BrowserRouter>

			{/* <CompA data="this is data from component 1" /> */}
			{/* <div className="app-container"> */}
			{/* </div> */}
			{/* <Conditional /> */}
			{/* <Props title="Lumbini City College" /> */}
		</>
	);
}

export default App;
