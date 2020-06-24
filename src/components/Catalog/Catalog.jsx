import React from 'react';
import CatalogMenu from './CatalogMenu';
import CatalogMovies from './CatalogMovies';


const Catalog = () => {

    return(
        <section className="catalog">
            <CatalogMenu />
            <CatalogMovies />
        </section>
    )

};

export default Catalog;