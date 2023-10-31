import { PencilLine } from "@phosphor-icons/react";
import styles from "./Sidebar.module.css";
import imageCover from "../../assets/image-cover.jpeg";
import { Avatar } from "../Avatar";

export const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src={imageCover} />
      <div className={styles.profile}>
        <Avatar
          src="https://avatars.githubusercontent.com/u/41978544?v=4"
        />

        <strong>Marilia Augusta</strong>
        <span>Desenvolvedora Frontend</span>
      </div>
      <footer>
        <a>
          <PencilLine color="#00875f" weight="light" size={24} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
};
