import React from "react";
import { Link } from "react-router-dom";

const MenuItem = (props) => {
  return (
    <li className="menu__item">
      <Link to="/">{props.text}</Link>
    </li>
  );
};

export default MenuItem;
