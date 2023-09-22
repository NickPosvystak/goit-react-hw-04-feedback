import { Component } from 'react';

class Counter extends Component {
  handleClick(e) {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  }
  render() {
    return (
      <div>
        <h2>Please leave feedback</h2>
        <div>
          <button onClick={this.handleClick}>Good</button>
          <button onClick={this.handleClick}>Neutral</button>
          <button onClick={this.handleClick}>Bad</button>
        </div>
      </div>
    );
  }
}
export default Counter;
