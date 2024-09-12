/* eslint-disable react/prop-types */
import { useState } from "react";
import styles from "./../styles/Createblog.module.css";
import { useNavigate } from "react-router-dom";
import { useBlogContext } from "../contexts/BlogContext";

const CreateBlog = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    description: "",
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((curr) => {
      return {
        ...curr,
        [name]: value,
      };
    });
  };

  const { handleAddBlog } = useBlogContext();
  const submitForm = async () => {
    await handleAddBlog(formData);
    navigate("/");
  };
  return (
    <div className={styles.container}>
      <form className={styles.formContainer}>
        <h1 className={styles.formTitle}>Create New Blog</h1>
        <div className={styles.formGroup}>
          <label htmlFor="title" className={styles.formLabel}>
            Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            className={styles.formInput}
            value={formData.title}
            onChange={handleFormChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="title" className={styles.formLabel}>
            Description
          </label>
          <input
            type="text"
            name="description"
            id="description"
            className={styles.formInput}
            value={formData.descripion}
            onChange={handleFormChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="content" className={styles.formLabel}>
            Content
          </label>
          <textarea
            name="content"
            id="content"
            className={styles.formTextarea}
            value={formData.content}
            onChange={handleFormChange}
          ></textarea>
        </div>
        <div className={styles.formGroup}>
          <button type="button" className={styles.btn} onClick={submitForm}>
            Add Blog
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateBlog;
