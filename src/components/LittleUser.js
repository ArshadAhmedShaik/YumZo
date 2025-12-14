import React from "react";
import Shimmer from "./Shimmer";

class LittleUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 1,
      json: null,
    };

    console.log(this.props.data.name + " Child constructor is called!");
  }

  // to make API calls

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/ArshadAhmedShaik");
    const json = await data.json();
    console.log(json);
    this.setState({
      json: json,
    });
    console.log(this.props.data.name + " Child component did mount!");
  }

  render() {
    console.log(this.props.data.name + " Child Render is called!");

    const {
      data: { name, location, contact },
    } = this.props;

    const { count, count2 } = this.state;

    if (this.state.json == null) {
      return <Shimmer />;
    }

    const { avatar_url: image, bio, name: user_name, location: loc } = this.state.json;

    return (
      <div className="user-card">
        <img src={image} alt="user image" />
        <h1>Count = {count}</h1>
        <h1>Count2 = {count2}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
              count2: this.state.count2 + 1,
            });
          }}
        >
          Count Increase
        </button>
        <h2>{ user_name }</h2>
        <h2>{bio}</h2>
        <h2>{loc}</h2>
      </div>
    );
  }
}

export default LittleUser;
