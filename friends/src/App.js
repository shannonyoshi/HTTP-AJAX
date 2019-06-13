import React from "react";
import axios from "axios";
import "./App.css";

import FriendList from "./components/FriendsList";
import FriendForm from "./components/FriendForm";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      friends: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(res => {
        this.setState({ friends: res.data });
      })
      .catch(err => {
        this.setState({ error: err.response.message });
      });
  }

  addFriend = (e, friendInput) => {
    e.preventDefault();
    const newFriend = {
      name: friendInput.name,
      age: friendInput.age,
      email: friendInput.email
    };
    this.setState({
      friends: [...this.state.friends, newFriend]
    });
    // axios.post("http://localhost:5000/friends", newFriend)
    // .then(res=>{
    //   console.log(res)
    // })
    // .catch(err => {
    //   console.log(err)
    // })
  };

  render() {
    return (
      <div className="App">
      <h2>Fwends!!</h2>
        <FriendList friends={this.state.friends} />
        <FriendForm addFriend={this.addFriend}/>
      </div>
    );
  }
}

export default App;
