import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import CreateBlog from "./pages/CreateBlog";
import Nav from "./components/Nav";

function App() {
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

  const [formData, setFormData] = useState({
    title: "",
    content: "",
    description: "",
  });
  const [selectedBlogId, setSelectedBlogId] = useState(null);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((curr) => {
      return {
        ...curr,
        [name]: value,
      };
    });
  };

  const handleAddBlog = async () => {
    try {
      if (
        formData.title === "" ||
        formData.description === "" ||
        formData.content === ""
      ) {
        alert("Please fill in all fields");
        return;
      }
      const response = await fetch(`${apiUrl}/blogs`, {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-type": "application/json",
        },
      });
      const data = await response.json();
      console.log("Blog created successfully", data);
    } catch (error) {
      console.log("An Error occured during fetch", error);
    }
  };

  const handleDeleteBlog = () => {};

  return (
    <section>
      <Router>
        <Nav />
        <Routes>
          <Route
            path="/"
            element={
              <Homepage
                blogs={blogs}
                handleDeleteBlog={handleDeleteBlog}
                selectedId={selectedBlogId}
                setSelectedId={setSelectedBlogId}
              />
            }
          />
          <Route
            path="/create-blog"
            element={
              <CreateBlog
                formData={formData}
                handleFormChange={handleFormChange}
                handleSubmit={handleAddBlog}
              />
            }
          />
        </Routes>
      </Router>
    </section>
  );
}

export default App;
