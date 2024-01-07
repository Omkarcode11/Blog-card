import styles from "./page.module.css";
import BlogCard from "./components/blogCard/BlogCard";
import { cards } from "./utils/cardsInfo";

export default function Home() {
  return (
    <main className={styles.main}>
      {cards
        ? cards.map((ele) => (
            <BlogCard
              user={ele.user}
              title={ele.title}
              badge={ele.badge[0]}
              description={ele.description}
              postAt={ele.postAt}
              img={ele.img}
            />
          ))
        : ""}
    </main>
  );
}
