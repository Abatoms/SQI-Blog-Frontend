import { Link } from "react-router-dom";
import styles from "./../styles/Nav.module.css"; // Import the CSS module

const Nav = () => {
  return (
    <div className={styles.nav}>
      <div className={styles.nav__header}>
        <h1 className={styles.nav__logo}>
          <Link to={"/"}>Blogga</Link>
        </h1>
      </div>
      <div className={styles.nav__links}>
        <div className={styles.nav__link}>
          <p>
            <Link to={"/create-blog"}>Create Blog</Link>
          </p>
        </div>
        <div className={styles.nav__link}>
          <p>See All Blogs</p>
        </div>
        <div className={styles.nav__link}>
          <p>Our company</p>
        </div>
      </div>
    </div>
  );
};

export default Nav;
