/* eslint-disable react/prop-types */
import { useState, useEffect, createContext, useContext } from "react";

// Create the context
const BlogContext = createContext();

// use the context
// eslint-disable-next-line react-refresh/only-export-components
export const useBlogContext = () => {
  return useContext(BlogContext);
};

// Create the Provider component
const BlogProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchBlogsFromDB();
  }, []);

  const apiUrl = import.meta.env.VITE_APIURL;

  const fetchBlogsFromDB = async () => {
    console.log("yayyyy");
    try {
      const response = await fetch(`${apiUrl}/blogs`);
      const data = await response.json();
      setBlogs(data.data);
      console.log(data);
    } catch (error) {
      console.log("An Error occured during fetch", error);
    }
  };

  const handleAddBlog = async (formData) => {
    try {
      if (
        formData.title === "" ||
        formData.description === "" ||
        formData.content === ""
      ) {
        alert("Please fill in all fields");
        return;
      }
      const token = localStorage.getItem("token");
      const response = await fetch(`${apiUrl}/blogs`, {
        method: "POST",
        body: JSON.stringify({ ...formData }),
        headers: {
          "Content-type": "application/json",
          authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      console.log("Blog created successfully", data);
    } catch (error) {
      console.log("An Error occured during fetch", error);
    }
  };

  // Values for the context
  const values = { blogs, handleAddBlog };

  return <BlogContext.Provider value={values}>{children}</BlogContext.Provider>;
};

export default BlogProvider;
