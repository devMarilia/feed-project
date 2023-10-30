import styles from "./Header.module.css";

import logoFeed from "../../assets/image-logo.svg";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div>
        <strong>Project Feed </strong>
        <img src={logoFeed} />
      </div>
    </header>
  );
};
