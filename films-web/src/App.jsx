import { MoviesGrid } from "./MoviesGrid";
import styles from "./App.module.css";

export function App() {
  return (
    <div>
      <header>
        <h1 className={styles.title}>Netflix v.2.0</h1>
      </header>
      <main>
        <MoviesGrid />
      </main>
    </div>
  );
}
