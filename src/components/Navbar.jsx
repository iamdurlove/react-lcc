import { Link } from "react-router-dom";
import NavItem from "../data/NavItem";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
	const { theme, setTheme } = useTheme();

	function handleClick() {
		setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
	}

	return (
		<div className="bg-black h-[10vh] text-white flex justify-between items-center p-4">
			<div>
				<img width={200} src="daraz.png" alt="" />
			</div>
			<div className="nav-links">
				<ul className="flex gap-4">
					{NavItem.map((item, i) => {
						return (
							<li key={item.id}>
								<Link to={item.to}>
									<item.icon /> {item.title}
								</Link>
							</li>
						);
					})}
					{/* <li>
						<button onClick={handleClick}>{theme + "kj"}</button>
					</li> */}
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
