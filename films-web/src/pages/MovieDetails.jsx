import movie from "./mm2.json";
import styles from "./MovieDetails.module.css";

export function MovieDetails() {
  const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  return (
    <div className={styles.detailsContainer}>
      <img src={imageUrl} alt={movie.title} />
    </div>
  );
}
