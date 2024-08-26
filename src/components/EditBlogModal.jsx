/* eslint-disable react/prop-types */
import styles from "./../styles/EditBlogModal.module.css";

const EditBlogModal = ({
  title,
  content,
  handleTitleChange,
  handleContentChange,
  handleClose, // Function to handle closing the modal
}) => {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={handleClose}>
          &times;
        </button>
        <form className={styles.formContainer}>
          <h1 className={styles.formTitle}>Edit Blog</h1>
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
            <button type="button" className={styles.btn}>
              Update Blog
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditBlogModal;
