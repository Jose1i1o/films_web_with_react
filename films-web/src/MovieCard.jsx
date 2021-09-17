export function MovieCard({ movie }) {
  const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  return (
    <li>
      <img src={imageUrl} alt={movie.title} />
      <div>{movie.title}</div>
    </li>
  );
}
