import React from "react";
import MenuItem from "./MenuItem.jsx";
import "./CatalogMenu.css";

const CatalogMenu = () => {
  const categories = [
    "Nos Cinemas",
    "Em Breve",
    "Bilheteria",
    "Séries",
    "Trailers",
  ];

  return (
    <nav className="catalog__menu">
      <div className="container">
        <ul className="menu__list">
          {categories.map((e, index) => (
            <MenuItem text={e} key={index+1}/>
          ))}
          ;
        </ul>
      </div>
    </nav>
  );
};

export default CatalogMenu;
