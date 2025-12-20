import Header from "./Header";
import Footer from "./Footer";
import User from "./User";
import UserClass from "./UserClass";
import LittleUser from "./LittleUser";
import Counter from "./Counter";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent component did mount!");
  }

  render() {
    console.log("Parent render");
    return (
      <div className="app min-h-screen flex flex-col">
  
    

        <div id="aboutContent" className="body flex-1 p-6 bg-gray-50">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">About Us</h1>

          <div className="user-container grid gap-4">
            <LittleUser
              data={{
                name: "first",
                location: "Boston",
                contact: "@muneer_USA",
              }}
            />
          </div>
        </div>

   
       
      </div>
    );
  }
}

export default About;
