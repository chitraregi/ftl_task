import React from "react";
import "./user.style.css";

const User = ({ id, name }) => {
  return (
    <div id={id} className="user-name">
      <h1>{name}</h1>
    </div>
  );
};

export default User;
