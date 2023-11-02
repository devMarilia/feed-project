import PropTypes from "prop-types";
import { ThumbsUp, Trash } from "@phosphor-icons/react";
import styles from "./Comment.module.css";
import { Avatar } from "../Avatar";

export const Comment = ({content}) => {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src='https://pps.whatsapp.net/v/t61.24694-24/375038716_1743533279410650_6598154535214622109_n.jpg?ccb=11-4&oh=01_AdQISbnSjIwFfoZ7pwKoVAzsyQ5WCNt4mtSEYZRjyob7NA&oe=654A68DC&_nc_sid=000000&_nc_cat=103'/>

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Matheus</strong>
              <time
                title="06 de Junho de 2022 às 15h30"
                dateTime="2022-06-06 15:33:00"
              >
                Cerca de 1h atrás
              </time>
            </div>

            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>{content} </p>
        </div>
        <footer>
          <button>
            <ThumbsUp /> Aplaudir <span>03</span>
          </button>
        </footer>
      </div>
    </div>
  );
};

Comment.propTypes = {
  content: PropTypes.string.isRequired,
 
};
