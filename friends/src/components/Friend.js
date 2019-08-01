import React from "react";
import { Route, NavLink } from "react-router-dom";
import { FaTrashAlt, FaEdit } from "react-icons/fa";

const Friend = ({ friends, match, deleteFriend, setUpdateForm }) => {
  const { id } = match.params;
  const friend = friends.find(friend => `${friend.id}` === id);
  if (!friend) {
    return <h2>Loading Friends...</h2>;
  }
  return (
    <div className="friend">
      <FaTrashAlt
        onClick={e => {
          deleteFriend(e, friend.id);
        }}
        style={{ color: "black", fontSize: "1em", padding: "1em" }}
      />
      <FaEdit
        onClick={e => {
          setUpdateForm(e, friend);
        }}
        style={{ color: "black", fontSize: "1em", padding: "1em" }}
      />
      <p>
        Name: <strong>{friend.name}</strong>
      </p>
      <p>
        Age: <strong>{friend.age}</strong>
      </p>
      <p>
        Email: <strong>{friend.email}</strong>
      </p>
    </div>
  );
};

export default Friend;
