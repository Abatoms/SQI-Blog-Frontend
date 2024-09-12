import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import CreateBlog from "./pages/CreateBlog";
import Nav from "./components/Nav";
import Login from "./pages/Login";
import Register from "./pages/Register";
import BlogProvider from "./contexts/BlogContext";

function App() {
  return (
    <section>
      <Router>
        <BlogProvider>
          <Nav />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/create-blog" element={<CreateBlog />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </BlogProvider>
      </Router>
    </section>
  );
}

export default App;
