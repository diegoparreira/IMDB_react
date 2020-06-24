import React from "react";
import { Link } from "react-router-dom";

const MovieItem = (props) => {
  console.log(props.movie);
  
  return (
    <li className="movie__item">
      <figure className="movie__poster">
        <img src={props.movie.poster} alt={props.movie.name} />
        <div className="movie__info">
          <h3>{props.movie.name}</h3>
          <Link to="/" className="movie__link">
            <i className="fa fa-play" aria-hidden="true"></i>
          </Link>
        </div>
      </figure>
      <div className="movie__synopsis">
          <h3 className="synopsis__title">{props.movie.name}</h3>
          <p className="synopsis__gender">
              <Link to="/" className="synopsis__gender__item">{props.movie.gender}</Link>
          </p>
          <p className="synopsis__grade">
              <i className="fa fa-heart" aria-hidden="true"></i>
              <span>{props.movie.grade}</span>
          </p>
      </div>
    </li>
  );
};

export default MovieItem;