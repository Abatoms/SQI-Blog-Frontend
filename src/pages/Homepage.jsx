/* eslint-disable react/prop-types */

import styles from "./../styles/Homepage.module.css";
import BlogCard from "../components/BlogCard";

const Homepage = ({ blogs, selectedId }) => {
  // console.log("In Homepage", blogs);

  console.log("Selected Blog id is", selectedId);
  return (
    <div className="w-[90%] mx-auto">
      <h1 className={styles.homepage_title}>All Blogs</h1>
      <div className="flex  justify-between items-center gap-2 flex-wrap">
        {blogs.map((blog) => (
          <div key={blog._id} className="basis-[20%]">
            <BlogCard title={blog.title} description={blog.description} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Homepage;
