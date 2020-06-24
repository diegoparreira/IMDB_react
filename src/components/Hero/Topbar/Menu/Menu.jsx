import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";


const Menu = () => {
  return (
    <nav className="topbar__menu">
      <Link to="/" className="menu__item">Lançamentos</Link>
      <Link to="/" className="menu__item">Crítica</Link>
      <Link to="/" className="menu__item">Em cartaz</Link>
    </nav>
  );
};

export default Menu;
