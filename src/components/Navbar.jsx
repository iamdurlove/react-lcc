import { Link } from "react-router-dom";
import NavItem from "../data/NavItem";

const Navbar = () => {
	function handleClick() {
		alert("Button clicked!");
	}

	return (
		<div className="nav">
			<div>
				<img width={200} src="/public/daraz.png" alt="" />
			</div>
			<div className="nav-links">
				<ul>
					{/* <li>
						<Link to="/">
							<FaHome /> Home
						</Link>
					</li>
					<li>
						<Link to="/about">
							<FaPerson /> About
						</Link>
					</li>
					<li>
						<Link to="/contact">
							<FaPhone /> Contact
						</Link>
					</li>
					<li>
						<Link to="/blog">
							<FaGlobe /> Blog
						</Link>
					</li>
					<li>
						<Link to="/movies">
							<FaFilm /> Movies
						</Link>
					</li>
					<li>
						<button onMouseOut={handleClick}>Click me</button>
					</li> */}

					{NavItem.map((item, i) => {
						return (
							<li key={item.id}>
								<Link to={item.to}>
									<item.icon /> {item.title}
								</Link>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
