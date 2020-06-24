import React from "react";
import "./User.css";
const avatar = "https://i.ibb.co/rfz6mqC/walter-white.jpg";

const User = () => {
  return (
    <div className="hero__user">
      <div className="user__photo">
        <img src={avatar} alt="John Doe Avatar" />
      </div>
      <div className="user__name">John Doe</div>
    </div>
  );
};

export default User;
