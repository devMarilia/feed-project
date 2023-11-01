import "./global.css";
import styles from "./App.module.css";
import postsData from "./store/postdata.json";
import { Header, Post, Sidebar } from "./components";
import { useEffect, useState } from "react";

export const App = () => {

  const [cachedPosts, setCachedPosts] = useState([]);
console.log(cachedPosts)

  useEffect(() => {
    // Tente buscar os dados do localStorage
    const cachedData = localStorage.getItem('cachedPosts');

    if (cachedData) {
      // Se os dados estiverem em cache, use-os
      setCachedPosts(JSON.parse(cachedData));
    } else {
      // Caso contrário, use os dados do JSON e armazene em cache
      setCachedPosts(postsData);
      localStorage.setItem('cachedPosts', JSON.stringify(postsData));
    }
  }, []);
  const { posts } = postsData;
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <aside>
          <Sidebar />
        </aside>
        <main>
          {posts.map(post => (
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishAt={post.publishAt}
            />
          ))}
        </main>
      </div>
    </div>
  );
};
