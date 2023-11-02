import * as React from 'react';
import './global.css';
import styles from './App.module.css';
import postsData from './store/postdata.json';
import { Header, Post, Sidebar, Loading } from './components';

export const App = () => {
  const [cachedPosts, setCachedPosts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const cachedData = localStorage.getItem('cachedPosts');

    if (cachedData) {
      setCachedPosts(JSON.parse(cachedData));
    } else {
      setCachedPosts(postsData);
      localStorage.setItem('cachedPosts', JSON.stringify(postsData));
    }

    // Simular um atraso de 2 segundos antes de ocultar o Loading
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const { posts } = cachedPosts;

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <aside>
          <Sidebar />
        </aside>
        <main>
          {loading ? (
            <Loading />
          ) : (
            posts.map(post => (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishAt={new Date(post.publishAt)}
              />
            ))
          )}
        </main>
      </div>
    </div>
  );
};
