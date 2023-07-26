import BlogCards from "../../components/blogs/BlogCards";
import SearchSort from "../../components/blogs/SearchSort";
import Divider from "../../components/tours/Divider";

const Blogs = () => {
    return (
        <div className="w-auto lg:w-[1170px] mx-auto pt-20">
            <h2 className="grad-text-olc text-center text-3xl font-bold">Blog</h2>
            <Divider />
            <div>
                <SearchSort />
            </div>
            <div>
                <BlogCards />
            </div>
        </div>
    );
};

export default Blogs;