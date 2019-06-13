import React from "react";

class FriendForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friendInput: this.props.activeFriend || {
        name: "",
        age: "",
        email: ""
      }
    };
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.activeFriend &&
      prevProps.activeFriend !== this.props.activeFriend
    ) {
      this.setState({
        friendInput: this.props.activeFriend
      });
    }
  }

  handleChanges = e => {
    e.persist();
    if (e.target.name === "age") {
      e.target.value = parseInt(e.target.value);
    }
    this.setState(prevState => ({
      friendInput: {
        ...prevState.friendInput,
        [e.target.name]: e.target.value
      }
    }));
  };

  submitFriend = e => {
    if (this.props.activeFriend) {
      this.props.updateFriend(e, this.state.friendInput);
    } else {
      this.props.addFriend(e, this.state.friendInput);
    }
    this.setState({
      friendInput: {
        name: "",
        age: "",
        email: "",
        id: ""
      }
    });
  };

  render() {
    return (
      <div className="form-wrapper">
        <h2>{`${this.props.activeFriend ? "Update" : "Add New"} Friend`} </h2>
        <form onSubmit={this.submitFriend} className="add-friend-form">
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={this.handleChanges}
            value={this.state.friendInput.name}
          />
          <input
            type="number"
            name="age"
            placeholder="Age"
            onChange={this.handleChanges}
            value={this.state.friendInput.age}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={this.handleChanges}
            value={this.state.friendInput.email}
          />
          <button type="submit" className="add-friend-button">
            {`${this.props.activeFriend ? 'Update': 'Add New'} Friend`}
          </button>
        </form>
      </div>
    );
  }
}

export default FriendForm;
