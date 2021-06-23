import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Movie() {
  const { id } = useParams();
  const link = "https://image.tmdb.org/t/p/w500";
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/ " +
        id +
        " ?api_key=9122d3e99f5cf10f65b111a1dcd51b20&language=ru-RU"
    )
      .then((res) => res.json())
      .then((data) => {
        setMovie(data);
      });
  }, []);

  console.log(movie);

  if (!movie) return null;

  return (
    <div className="movie">
      <img id="movie-img" src={link + movie.poster_path} alt="" />
      <div className="movie-text">
        <h1>{movie.title}</h1>
        <h3>Oригинальное название : {movie.original_title}</h3>
        <p>
          <span> {movie.runtime} мин </span>
          <span> {movie.release_date}</span>
          <span><i>{movie.vote_average}</i></span>
        </p>
        <p>{movie.overview}</p>
      </div>
      <div className="movie-buttons">
        <a href="#">
          <i className="fa fa-play">Смотреть</i>
        </a>
        <a href="#">
          <i className="fa fa-plus">Добавить</i>
        </a>
      </div>
    </div>
  );
}


export default Movie;
