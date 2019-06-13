import React from "react";
import axios from "axios";
import "./App.css";
import { NavLink, Route } from "react-router-dom";

import FriendList from "./components/FriendsList";
import FriendForm from "./components/FriendForm";
import Friend from "./components/Friend";
import Home from "./components/Home";
import { networkInterfaces } from "os";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      activeFriend: null,
      error: ""
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

    axios
      .post("http://localhost:5000/friends", newFriend)
      .then(res => {
        this.setState({
          friends: res.data
          // postSuccessMessage: "Friend successfully added!",
          // postErrorMessage: ""
        });
      })
      .catch(err => {
        this.setState({
          postSuccessMessage: "",
          postErrorMessage: `${newFriend.name} is not a friend`
        });
      });
  };

  deleteFriend = (e, id) => {
    e.preventDefault();
    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(res => {
        this.setState({
          friends: res.data
        });
        this.props.history.push("/");
      })
      .catch(err => {
        console.log(err);
      });
  };

  setUpdateForm = (e, friend) => {
    e.preventDefault();
    this.setState({
      activeFriend: friend
    });
    this.props.history.push("/friend-form");
  };

  updateFriend = (e, friend) => {
    e.preventDefault();
    axios
      .put(`http://localhost:5000/friends/${friend.id}`, friend)
      .then(res => {
        this.setState({
          activeFriend: null,
          friends: res.data
        });
        this.props.history.push("/");
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="App">
        <header>
          <nav>
            <NavLink exact to="/">Home</NavLink>
            
            <NavLink to="/friend-list">Friend List</NavLink>
            
            <NavLink to="/friend-form">
              {`${this.state.activeFriend ? "Update" : "Add"}Friend`}
            </NavLink>
          </nav>
        </header>

        <Route exact path="/" component={Home} />
        
        <Route
          exact
          path="/friend-list"
          render={props => <FriendList {...props} friends={this.state.friends} />}
        />
        
        <Route
          exact
          path="/friend-form"
          render={props => (
            <FriendForm
              {...props}
              activeFriend={this.state.activeFriend}
              addFriend={this.addFriend}
              updateFriend={this.updateFriend}
            />
          )}
        />
        <Route
          path="/friend-list/:id"
          render={props => (
            <Friend
              {...props}
              deleteFriend={this.deleteFriend}
              friends={this.state.friends}
              setUpdateForm={this.setUpdateForm}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
