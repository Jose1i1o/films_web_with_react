import movie from "./movie.json";
import styles from "./MovieDetails.module.css";

console.log(movie.poster_path);

export function MovieDetails() {
  const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  return (
    <div className={styles.detailsContainer}>
      <img
        className={`${styles.col} ${styles.container__image}`}
        src={imageUrl}
        alt={movie.title}
      />
      <div className={styles.col}>
        <div>
          <p className={`${styles.container__title} ${styles.firstitem}`}>
            Title:
          </p>
          <p>{movie.title}</p>
          <p className={styles.container__title}>Genres:</p>
          <p>{movie.genres.map((props) => props.name).join(", ")}</p>
          <p className={styles.container__title}>Description:</p>
          <p>{movie.overview}</p>
        </div>
      </div>
    </div>
  );
}
