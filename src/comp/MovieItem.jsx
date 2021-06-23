import { Link } from "react-router-dom";

function MovieItem(props) {
  const link = "https://image.tmdb.org/t/p/w500";

  return (
    <Link to={"/movie/" + props.data.id} className="movie-item">
      <div id="movie-item-inner" className="movie-item-inner">
        <img id="movie-img" src={link + props.data.poster_path} alt="" />
        <h1>{props.data.title}</h1>
      </div>
    </Link>
  );
}

export default MovieItem;
