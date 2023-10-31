// import PropTypes from "prop-types";
import { Avatar } from "../Avatar";
import { Comment } from "../Comment";
import styles from "./Post.module.css";
export const Post = () => {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar
            className={styles.avatar}
            src="https://avatars.githubusercontent.com/u/41978544?v=4"
           
          />

          <div className={styles.authorInfo}>
            <strong>Marilia Augusta</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="31 de Outubro às 20:30" dateTime="2023-31-10 21:00:00">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋 </p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀{" "}
        </p>
        <p>
          👉 <a href="">jane.design/doctorcare</a>{" "}
        </p>
        <p>
          <a href="">#novoprojeto</a> <a href=""> #programação </a>{" "}
          <a href="">#reactjs</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu comentário</strong>

        <textarea placeholder="Deixe seu comentário" />
        <footer>
        <button type="submit">Comentar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
       <Comment/>
       <Comment/>
       <Comment/>
       
      </div>
    </article>
  );
};

// Post.propTypes = {
//   author: PropTypes.string.isRequired,
//   content: PropTypes.string.isRequired,
// };
