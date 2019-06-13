import React from "react";
import Friend from "./Friend";

const FriendsList = props => {
    return (
        <div className="friends-list">
{props.friends.map(person =>(
    <Friend friend = {person} key={person.id}/>
))}
        </div>
    )
}

export default FriendsList;