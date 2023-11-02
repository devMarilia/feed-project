import PropTypes from "prop-types";
import * as React from 'react'
import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { Avatar } from "../Avatar";
import { Comment } from "../Comment";
import styles from "./Post.module.css";

// const comments = 

export const Post = ({ author, publishAt, content }) => {

  const [comments, setComments] = React.useState([
    "Gostei do post...👏👏"
  ])

  const [newCommentText, setNewCommentText] = React.useState('')

  const publishedDateFormatted = format(publishAt, "dd LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  });

  const publishedDateRelativeToNow = formatDistanceToNow(publishAt, {
    locale: ptBR,
    addSuffix: true,
  });

  function handleCreateNewComment(event) {
    event.preventDefault();
    setComments([...comments, newCommentText])

    setNewCommentText('')
  }

  function handleNewCommitChange(event) {
    setNewCommentText(event.target.value)
  }



  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar className={styles.avatar} src={author.avatarUrl} />

          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormatted} dateTime={publishAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((line, index) => {
          if (line.type === "paragraph") {
            return <p key={index}>{line.content}</p>;
          } else if (line.type === "link") {
            return (
              <p key={index}>
                <a href={line.content}>{line.content}</a>
              </p>
            );
          } else {
            return null;
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu comentário</strong>

        <textarea 
          name='comment' 
          placeholder="Deixe seu comentário" 
          onChange={handleNewCommitChange}
          value={newCommentText}
        />
        <footer>
          <button type="submit">Comentar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment, index) => (
          <Comment key={index} content={comment} />
        ))}
      </div>
    </article>
  );
};

Post.propTypes = {
  author: PropTypes.shape({
    avatarUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
  }).isRequired,
  publishAt: PropTypes.instanceOf(Date).isRequired,
  content: PropTypes.string.isRequired,
};
