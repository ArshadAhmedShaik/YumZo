import React from "react";

class Counter extends React.Component {
    
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    const {
      data: { text },
    } = this.props;

    return (
      <div className="user-card">
        <h1>{text}</h1>
        <h1>Count: {this.state.count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Click Me
        </button>
      </div>
    );
  }
}

export default Counter;
