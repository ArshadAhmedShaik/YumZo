import React from "react";

class LittleUser extends React.Component {

    constructor(props) {
            super(props);
            this.state = {
                count: 0,
                count2: 1
            }
    }

    render() {

        const { data: {
            name, 
            location,
            contact
        }} = this.props;

        const { count,count2 } = this.state;
        
        return (
            <div className="user-card">
                <h1>Count = { count }</h1>
                <h1>Count2 = { count2 }</h1>
                <button onClick={
                    () => {
                       this.setState( {
                            count: this.state.count + 1,
                            count2: this.state.count2 + 1
                       } );
                    }
                }>Count Increase</button>
                <h2>{name}</h2>
                <h2>{location}</h2>
                <h2>{contact}</h2>

            </div>
        );
    }
}

export default LittleUser;