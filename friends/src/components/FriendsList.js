import React from "react";
import Friend from "./Friend";
import {Link } from "react-router-dom"
import {FaTrashAlt, FaEdit} from "react-icons/fa"

const FriendsList = props => {
  if (props.friends.length === 0) {
    return <h2>Loading Friends...</h2>;
  }
  return (
    <>
      <h2>Fwends!!</h2>
      <div className="friends-list">
        {props.friends.map(person => (
          <Link to={`/friend-list/${person.id}`} key={person.id}>
            <div className="friend">
                {/* <FaTrashAlt
                  style={{ color: "black", fontSize: "1em", padding: "1em" }}
                /> */}
              <p>Name: <strong>{person.name}</strong></p>
              <p>Age: <strong>{person.age}</strong></p>
              <p>Email: <strong>{person.email}</strong></p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default FriendsList;
