import "./global.css";
import styles from './App.module.css'
import { Header, Post, Sidebar } from "./components";


export const App = () => {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <aside>
          <Sidebar/>
        </aside>
        <main>
          <Post
            author="Dev Lia"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo perferendis autem a nam sunt adipisci voluptas voluptatum officiis iusto sint, tenetur alias, placeat eligendi debitis dignissimos laborum recusandae ipsam at."
          />
        </main>
      </div>
    </div>
  );
};
