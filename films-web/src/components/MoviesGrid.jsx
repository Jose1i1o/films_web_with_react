import { useEffect, useState } from "react";
import { MovieCard } from "./MovieCard";
import styles from "./MoviesGrid.module.css";

export function MoviesGrid() {
  const [movies, setMovies] = useState([]);
  // const movies = moviesState[0];
  // const setMovies = moviesState[1];
  useEffect(() => {
    fetch("https://api.themoviedb.org/3/discover/movie", {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YWNjZGM1NzhjNjU0YWQyZmQ5MGU3ZTQyMjM0Yjc4NCIsInN1YiI6IjYxNDYzMjViYjViYzIxMDA0NGZjMDg0YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OqFhik6xrMtpqMcxfAra_GvVhLgc0T03LrWGr2pF6mk",
        "Content-Type": "application/json;charset=utf-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, []);
  return (
    <ul className={styles.moviesGrid}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
}
