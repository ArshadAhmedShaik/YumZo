import React from "react";

class UserClass extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="user-card">
        <h2>Name: {this.props.data.name}</h2>
        <h3>Location: {this.props.data.location}</h3>
        <h4>Contact: {this.props.data.contact}</h4>
      </div>
    );
  }
}

export default UserClass;
