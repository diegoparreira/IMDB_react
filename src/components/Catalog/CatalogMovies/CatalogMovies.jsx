import React from 'react';
import MovieItem from './MovieItem';
import "./CatalogMovies.css";
const {movies} = require('../../../data/movies.json');

const CatalogMovies = () => {
    console.log(movies);

    return (
        <div className="container">
            <div className="catalog__movies">
                {movies.map(e => (<MovieItem key={e.id} movie={e}/>))}
            </div>
        </div>
    )
}

export default CatalogMovies;