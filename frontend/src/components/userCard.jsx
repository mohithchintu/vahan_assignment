import React from "react";

const UserCard = ({ user }) => {
  const { name, email, mobileNumber, dateOfBirth } = user;
  return (
    <div className="border shadow-lg rounded-md p-5">
      <p>name: {name}</p>
      <p>email: {email}</p>
      <p>mobileNumber: {mobileNumber}</p>
      <p>dateOfBirth: {dateOfBirth}</p>
    </div>
  );
};

export default UserCard;
