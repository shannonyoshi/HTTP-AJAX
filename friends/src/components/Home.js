import React from "react";

function Home(props) {
    function navigateToFriends(e) {
    e.preventDefault();
    props.history.push("/friend-list");
  }
  return (
    <div className="home-container">
      <h2>Welcome to your Friendly home page</h2>
      <button onClick={navigateToFriends}>See Your Friends</button>
    </div>
  );
}
export default Home;