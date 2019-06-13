import React from "react";

class FriendForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friendInput: {
        name: "",
        age: "",
        email: ""
      }
    };
  }

  handleChanges = e => {
    this.setState({friendInput: {
        ...this.state.friendInput,
      [e.target.name]: e.target.value
    }});
  };

  submitFriend = e => {
    this.props.addFriend(e, this.state.friendInput);
    this.setState({ friendInput: { name: "", age: "", email: "" } });
  };

  render() {
    return (
      <div className="form-wrapper">
        <h2>Add New Friend</h2>
        <form onSubmit={this.submitFriend}>
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
          <button>Add Friend</button>
        </form>
      </div>
    );
  }
}

export default FriendForm;
