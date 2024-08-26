/* eslint-disable react/prop-types */
import { useState } from "react";
import EditBlogModal from "../components/EditBlogModal";
import styles from "./../styles/Homepage.module.css";

const Homepage = ({ blogs, handleDeleteBlog, selectedId, setSelectedId }) => {
  // console.log("In Homepage", blogs);
  const [showEditModal, setShowEditModal] = useState(false);

  const handleOpenModal = (id) => {
    setShowEditModal(true);
    setSelectedId(id);
  };

  const handleCloseModal = () => {
    setShowEditModal(false);
  };

  console.log("Selected Blog id is", selectedId);
  return (
    <div className={styles.homepage_container}>
      <h1 className={styles.homepage_title}>All Blogs</h1>
      {blogs.map((blog) => (
        <div key={blog.id} className={styles.blog_container}>
          <div>
            <h1 className={styles.blog_title}>{blog.title}</h1>
            <p className={styles.blog_content}>{blog.content}</p>
          </div>
          <div className={styles.btns}>
            <button
              className={styles.btn}
              onClick={() => handleOpenModal(blog.id)}
            >
              Edit
            </button>
            <button
              className={styles.btn}
              onClick={() => handleDeleteBlog(blog.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
      {showEditModal && <EditBlogModal handleClose={handleCloseModal} />}
    </div>
  );
};

export default Homepage;
