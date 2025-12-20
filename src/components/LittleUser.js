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
    this.setState({ json: json });
    console.log(this.props.data.name + " Child component did mount!");
  }

  render() {
    console.log(this.props.data.name + " Child Render is called!");

    const {
      data: { name, location, contact },
    } = this.props;

    const { count, count2 } = this.state;

    if (this.state.json == null) {
      return (
        <div className="app flex flex-col justify-center items-center min-h-screen">
       
          <div className="w-16 h-16 border-6 border-gray-800 border-t-6 border-t-sky-400 rounded-full animate-spin"></div>


          <h2 className="mt-5 font-medium text-lg">Loading...</h2>
          <p className="mt-2 text-gray-400">Please Wait...</p>
        </div>
      );
    }

    const {
      avatar_url: image,
      bio,
      name: user_name,
      location: loc,
    } = this.state.json;

    return (
      <div className="user-card max-w-sm bg-white shadow-md rounded-lg overflow-hidden p-6 flex flex-col items-center space-y-4 transition-transform transform hover:-translate-y-1 hover:shadow-lg">
        <img
          src={image}
          alt="user image"
          className="w-24 h-24 rounded-full object-cover border-2 border-gray-300"
        />

        <div className="text-center space-y-1">
          <h2 className="text-lg font-bold text-gray-800">{user_name}</h2>
          <p className="text-gray-600 text-sm">{bio}</p>
          <p className="text-gray-500 text-sm">{loc}</p>
        </div>
      </div>
    );
  }
}

export default LittleUser;
