import React from "react";
import {Link} from 'react-router-dom';
import "./Content.css";

const Content = () => {
  return (
    <div className="hero__content">
      <div className="container">
        <h1 className="hero__title">Mad Max: A Estada da Fúria</h1>
        <ul className="hero__categories">
          <li className="categorie__item">Aventura</li>
          <li className="categorie__item">SCI-FI</li>
          <li className="categorie__item">Terror</li>
        </ul>
        <Link to="/" className="hero__button">
          <i className="fa fa-play-circle-o"></i>
          Assistir Trailer
        </Link>
        <div className="hero__info">
          <span>Nos cinemas</span><br/>
          <span>15 de outubro de 2015 (Brasil)</span>
        </div>
      </div>
    </div>
  );
};

export default Content;
