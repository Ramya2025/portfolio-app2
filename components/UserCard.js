import React from "react";
import { Link } from "react-router-dom";

const UserCard = () => {
  return (
    <Link to="/user-profile" className="user-card-link">
      <div className="user-card">
        <h3>User Card</h3>
        {/* Add any other user information you want to display */}
      </div>
    </Link>
  );
};

export default UserCard;
