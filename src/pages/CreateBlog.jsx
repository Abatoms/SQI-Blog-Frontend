/* eslint-disable react/prop-types */
import styles from "./../styles/Createblog.module.css";

const CreateBlog = ({
  title,
  content,
  handleTitleChange,
  handleContentChange,
  handleSubmit,
}) => {
  return (
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
          value={title}
          onChange={handleTitleChange}
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
          value={content}
          onChange={handleContentChange}
        ></textarea>
      </div>
      <div className={styles.formGroup}>
        <button type="button" className={styles.btn} onClick={handleSubmit}>
          Add Blog
        </button>
      </div>
    </form>
  );
};

export default CreateBlog;
