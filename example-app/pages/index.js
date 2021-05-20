import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <p>This is Home page</p>
      <Link href="/books">
        <button>Next</button>
      </Link>
    </div>
  );
}
