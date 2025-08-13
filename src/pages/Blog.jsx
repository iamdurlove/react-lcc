import { use } from "react";
import { LearnContext } from "../context/MyContext";

const Blog = () => {
	const { college } = use(LearnContext);

	return <div>Blog, {college}</div>;
};

export default Blog;
