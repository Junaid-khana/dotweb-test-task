import React from "react";

export const Profile = () => {
  return (
    <div className="profile">
      <div className="profile-image">
        {" "}
        <img src="/images/profile.jpeg"></img>
      </div>
      <h2>Immotrust AG </h2>
      <p className="">Vertrauensvolle Immobilienberatung seit 2008.</p>
      <button className="profile-button">Carlos Kuk - Eigentümer</button>
    </div>
  );
};
