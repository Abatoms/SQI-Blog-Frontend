/* eslint-disable react/prop-types */

import styles from "./../styles/Homepage.module.css";
import BlogCard from "../components/BlogCard";
import { useBlogContext } from "../contexts/BlogContext";

const Homepage = ({ selectedId }) => {
  // console.log("In Homepage", blogs);

  const { blogs } = useBlogContext();

  console.log("Selected Blog id is", selectedId);
  return (
    <div className="w-[90%] mx-auto">
      <h1 className={styles.homepage_title}>All Blogs</h1>
      <div className="flex  justify-between items-center gap-2 flex-wrap">
        {blogs.map((blog) => (
          <div key={blog._id} className="basis-[20%]">
            <BlogCard
              title={blog.title}
              description={blog.description}
              user={blog?.user?.firstname + " " + blog?.user?.lastname}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Homepage;
