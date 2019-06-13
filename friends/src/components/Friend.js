import React from "react";

const Friend = props => {
  return (
    <div className="friend">
      <p>Name: <strong>{props.friend.name}</strong></p>
      <p>Age: <strong>{props.friend.age}</strong></p>
      <p>Email: <strong>{props.friend.email}</strong></p>
    </div>
  );
};

export default Friend;
