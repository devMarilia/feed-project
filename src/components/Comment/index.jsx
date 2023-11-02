import * as React from "react";
import PropTypes from "prop-types";
import { ThumbsUp, Trash } from "@phosphor-icons/react";
import styles from "./Comment.module.css";
import { Avatar } from "../Avatar";

export const Comment = ({ content, onDeleteComment }) => {
  const [likeCount, setLikeCount] = React.useState(0)

  const handleDeleteComment = () => {
    onDeleteComment(content)
  };

  const handleLikeClick = () => {
    setLikeCount((stateLikeCount) => stateLikeCount + 1);
  };

  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        src="https://photos.enjoei.com.br/brechodarih/576x500/czM6Ly9waG90b3MuZW5qb2VpLmNvbS5ici9wcm9kdWN0cy8xOTIwMTIvZjMxNmI5YjdmOTA0Yzg1MDAzNDViZjU0OGQ0ZGUzYWEuanBn"
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Anna Julia</strong>
              <time
                title="06 de Junho de 2022 às 15h30"
                dateTime="2022-06-06 15:33:00"
              >
                Cerca de 1h atrás
              </time>
            </div>

            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>{content} </p>
        </div>
        <footer>
        <button onClick={handleLikeClick}>
        <ThumbsUp /> Aplaudir <span>{likeCount}</span>
      </button>
        </footer>
      </div>
    </div>
  );
};

Comment.propTypes = {
  content: PropTypes.string.isRequired,
  onDeleteComment: PropTypes.func.isRequired,
};
