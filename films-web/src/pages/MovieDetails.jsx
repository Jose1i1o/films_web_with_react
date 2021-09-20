import movie from "./movie.json";
import styles from "./MovieDetails.module.css";
import { useParams } from "react-router"; // hook
import { useEffect, useState } from "react";
import { get } from "../utils/httpClient";
import { Spinner } from "../components/spinner";

export function MovieDetails() {
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    setIsLoading(true);

    get("/movie/" + movieId).then((data) => {
      setMovie(data);
      setIsLoading(false);
    });
  }, [movieId]);

  if (isLoading) {
    return <Spinner />;
  }

  // if (movie === null) {
  //   return null;
  // }

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
