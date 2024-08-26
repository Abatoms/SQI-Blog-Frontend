import { useState } from "react";
import "./App.css";
import Homepage from "./pages/Homepage";
import CreateBlog from "./pages/CreateBlog";

function App() {
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: "Blog 1",
      content: "Content 1",
    },
    {
      id: 2,
      title: "Blog 2",
      content: "Content 2",
    },
    {
      id: 3,
      title: "Blog 3",
      content: "Content 3",
    },
  ]);

  const [formTitle, setFormTitle] = useState("");
  const [formContent, setFormContent] = useState("");
  const [selectedBlogId, setSelectedBlogId] = useState(null);

  const handleTitleChange = (e) => {
    setFormTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setFormContent(e.target.value);
  };

  const handleAddBlog = () => {
    const newId = blogs[blogs.length - 1].id + 1;
    const newBlog = {
      id: newId,
      title: formTitle,
      content: formContent,
    };
    setBlogs((curr) => [...curr, newBlog]);
    setFormTitle("");
    setFormContent("");
  };

  const handleDeleteBlog = (id) => {
    setBlogs((curr) => curr.filter((blog) => blog.id !== id));
  };

  return (
    <section>
      <Homepage
        blogs={blogs}
        handleDeleteBlog={handleDeleteBlog}
        selectedId={selectedBlogId}
        setSelectedId={setSelectedBlogId}
      />
      <CreateBlog
        title={formTitle}
        content={formContent}
        handleTitleChange={handleTitleChange}
        handleContentChange={handleContentChange}
        handleSubmit={handleAddBlog}
      />
    </section>
  );
}

export default App;
