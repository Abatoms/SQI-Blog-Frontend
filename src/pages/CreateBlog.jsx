/* eslint-disable react/prop-types */
import styles from "./../styles/Createblog.module.css";
import { useNavigate } from "react-router-dom";

const CreateBlog = ({ formData, handleFormChange, handleSubmit }) => {
  const navigate = useNavigate();
  const submitForm = async () => {
    await handleSubmit();
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
