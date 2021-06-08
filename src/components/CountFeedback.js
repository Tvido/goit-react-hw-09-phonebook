import { Component } from 'react';


class CountFeedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  goodClick = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  }

  neutralClick = () => {
    this.setState(prevState => ({
        neutral: prevState.neutral + 1,
    }));
  }

  badClick = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  }

  render() {
    return (
      <>
        <div className="">
          <h1 className="">Please leave feedback</h1>
          <button type="button" onClick={this.goodClick} className="">Good</button>
          <button type="button" onClick={this.neutralClick} className="">Neutral</button>
          <button type="button" onClick={this.badClick} className="">Bad</button>
        </div>
        <div className="">
          <h1 className="">Statistics</h1>
          <span className="">Good: {this.state.good}</span>
          <span className="">Neutral: {this.state.neutral}</span>
          <span className="">Bad: {this.state.bad}</span>
        </div>
      </>
    )
  }
}

export default CountFeedback;