// App.jsx
import * as React from "react";
import "./global.css";
import styles from "./App.module.css";
import postsData from "./store/postdata.json";
import { Header, Post, Sidebar, NewPost, Loading } from "./components";

export const App = () => {
  const [loading, setLoading] = React.useState(true);
  const [posts, setPosts] = React.useState([]);
  const [newPostText, setNewPostText] = React.useState("");

  const handleCreateNewPost = (text) => {
    if (text.trim() !== "") {
      const newPost = {
        id: posts.length + 1,
        author: {
          avatarUrl: "https://avatars.githubusercontent.com/u/41978544?v=4",
          name: "Marilia Augusta",
          role: "Desenvolvedora Front-End",
        },
        content: [{ type: "paragraph", content: text }],
        publishAt: new Date().toISOString(),
      };

      setPosts([...posts, newPost]);
    }
  };

  React.useEffect(() => {
    setPosts(postsData.posts);

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <aside>
          <Sidebar />
        </aside>
        <main>
          <NewPost
            onPublishNewPost={handleCreateNewPost}
            newPostText={newPostText}
            setNewPostText={setNewPostText}
          />

          {loading ? (
            <Loading />
          ) : (
            <div>
              {posts.map((post) => (
                <Post
                  key={post.id}
                  author={post.author}
                  content={post.content}
                  publishAt={new Date(post.publishAt)}
                />
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
};
