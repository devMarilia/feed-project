// NewPost.jsx
import * as React from 'react';
import PropTypes from 'prop-types';
import styles from './NewPost.module.css';

export const NewPost = ({ onPublishNewPost, newPostText, setNewPostText }) => {
  const [isCreating, setIsCreating] = React.useState(false);

  const handleCreateNewPost = () => {
    setIsCreating(true);
  };

  const handlePublishNewPost = () => {
    if (newPostText.trim() !== '') {
      onPublishNewPost(newPostText);
      setNewPostText('');
      setIsCreating(false);
    }
  };

  const handleCancelCreate = () => {
    setIsCreating(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <strong>Novo Post</strong>
        {!isCreating && (
          <button className={styles.createButton} onClick={handleCreateNewPost}>
            Criar
          </button>
        )}
      </div>

      {isCreating && (
        <div>
          <textarea
            placeholder="Digite seu novo post aqui..."
            className={styles.textarea}
            value={newPostText}
            onChange={(e) => setNewPostText(e.target.value)}
          />
          <div className={styles.buttonContainer}>
            <button className={styles.createButton} onClick={handlePublishNewPost}>
              Publicar
            </button>
            <button className={styles.cancelButton} onClick={handleCancelCreate}>
              Cancelar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

NewPost.propTypes = {
  onPublishNewPost: PropTypes.func.isRequired,
  newPostText: PropTypes.string.isRequired,
  setNewPostText: PropTypes.func.isRequired,
};
