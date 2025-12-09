import Header from "./Header";
import Footer from "./Footer";
import User from "./User";
import UserClass from "./UserClass";
import LittleUser from "./LittleUser";
import Counter from "./Counter";

const About = () => {
  return (
    <div className="app">
      <div id="aboutContent" className="body">
        <h1>About Us</h1>
        <p>
          Welcome to YumZo, your go-to platform for discovering the best
          restaurants around you...
        </p>
        <p>At YumZo, we believe that food is more than just sustenance...</p>
        <p>
          Our team is dedicated to providing you with up-to-date information...
        </p>
        <p>Thank you for choosing YumZo as your trusted restaurant guide...</p>
        <div className="user-container">
           <User data = {{
                name: "Arshad",
                location: "Hyderabad",
                contact: "@arshad_dec"
           }}/>
           <UserClass data = {{
                name: "Arshad",
                location: "Hyderabad",
                contact: "@arshad_dec"
           }} />

           <LittleUser data = {{
                name: "Muneer",
                location: "Boston",
                contact: "@muneer_USA"
           }}/>

           <Counter data={ {
                 text: "CounterApp!"
           } }/>

        </div>
      </div>
    </div>
  );
};

export default About;
