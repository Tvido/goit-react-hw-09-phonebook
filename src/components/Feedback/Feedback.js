import { Component } from 'react';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  onClickGood = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  }

  onClickNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  }

  onClickBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  }

  render() {
    return (
      <>
        <FeedbackOptions
          onClickGood={this.onClickGood}
          onClickNeutral={this.onClickNeutral}
          onClickBad={this.onClickBad}
        />
        <div className="statistic__result">
          <h1 className="">Statistics</h1>
          <span className="">Good: {this.state.good}</span>
          <span className="">Neutral: {this.state.neutral}</span>
          <span className="">Bad: {this.state.bad}</span>
        </div>
      </>
    )
  }
}

export default Feedback;