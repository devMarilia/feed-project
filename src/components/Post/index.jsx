import PropTypes from "prop-types";
import * as React from "react";
import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { Avatar } from "../Avatar";
import { Comment } from "../Comment";
import {Loading} from "../Loading"; 
import styles from "./Post.module.css";

export const Post = ({ author, publishAt, content }) => {
  const [comments, setComments] = React.useState(["Gostei do post...👏👏"]);
  const [newCommentText, setNewCommentText] = React.useState("");
  const [loading, setLoading] = React.useState(true); // Adicionado estado de loading

  const publishedDateFormatted = format(publishAt, "dd LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  });

  const publishedDateRelativeToNow = formatDistanceToNow(publishAt, {
    locale: ptBR,
    addSuffix: true,
  });

  React.useEffect(() => {
    // Simulando um atraso de 2 segundos antes de ocultar o Loading
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  function handleCreateNewComment(event) {
    event.preventDefault();
    setComments([...comments, newCommentText]);
    setNewCommentText("");
  }

  function handleNewCommitChange(event) {
    setNewCommentText(event.target.value);
  }

  const deleteComment = (commentToDelete) => {
    const commentsWithoutDeleteOne = comments.filter((comment) => {
      return comment !== commentToDelete;
    });
    setComments(commentsWithoutDeleteOne);
  };

  const handleNewCommentInvalid = (event) => {
    event.target.setCustomValidity("");
    setNewCommentText(event.target.value);
  };

  return (
    <article className={styles.post}>
      {loading ? (
        <Loading /> // Exibe o Loading enquanto o conteúdo está sendo carregado
      ) : (
        <>
          <header>
            <div className={styles.author}>
              <Avatar className={styles.avatar} src={author.avatarUrl} />

              <div className={styles.authorInfo}>
                <strong>{author.name}</strong>
                <span>{author.role}</span>
              </div>
            </div>

            <time
              title={publishedDateFormatted}
              dateTime={publishAt.toISOString()}
            >
              {publishedDateRelativeToNow}
            </time>
          </header>

          <div className={styles.content}>
            {content.map((line) => {
              if (line.type === "paragraph") {
                return <p key={line.content}>{line.content}</p>;
              } else if (line.type === "link") {
                return (
                  <p key={line.content}>
                    <a href={line.content}>{line.content}</a>
                  </p>
                );
              } else {
                return null;
              }
            })}
          </div>

          <form
            onSubmit={handleCreateNewComment}
            className={styles.commentForm}
          >
            <strong>Deixe seu comentário</strong>

            <textarea
              name="comment"
              placeholder="Deixe seu comentário"
              onChange={handleNewCommitChange}
              value={newCommentText}
              onInvalid={handleNewCommentInvalid}
              required
            />
            <footer>
              {newCommentText.length > 0 && (
                <button type="submit">Comentar</button>
              )}
            </footer>
          </form>

          <div className={styles.commentList}>
            {comments.map((comment) => (
              <Comment
                key={comment}
                content={comment}
                onDeleteComment={deleteComment}
              />
            ))}
          </div>
        </>
      )}
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
  content: PropTypes.array.isRequired,
};
