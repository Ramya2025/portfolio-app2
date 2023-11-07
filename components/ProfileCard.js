import React from "react";

const ProfileCard = ({ user }) => {
  return (
    <div className="card">
      <div className="card-header">Profile</div>
      <div className="card-body">
        <p>Username: {user.username}</p>
        {/* Add other profile information here */}
      </div>
    </div>
  );
};

export default ProfileCard;
