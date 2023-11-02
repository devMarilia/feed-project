import styles from './Loading.module.css';

export const Loading = () => {
  return (
    <div className={styles.loading}>
      <div className={styles.spinner}></div>
      <p>Carregando...</p>
    </div>
  );
};
