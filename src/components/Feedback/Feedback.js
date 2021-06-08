import { Component } from 'react';
import PropTypes from 'prop-types';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';

class Feedback extends Component {
  static defaultProps = {
    initialGood: 0,
    initialNeutral: 0,
    initialBad: 0,
    // initialTotal: 0,
    // initialPositivePercentage: 0,
  };

  static propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
  };

  state = {
    good: this.props.initialGood,
    neutral: this.props.initialNeutral,
    bad: this.props.initialBad,
    // total: this.props.initialTotal,
    // positivePercentage: this.props.initialPositivePercentage,
  };

  onClickGood = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };

  onClickNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };

  onClickBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  countTotalFeedback = () =>
    this.state.good + this.state.bad + this.state.neutral;

  countPositivePercentage = () => {
    const total = this.countTotalFeedback();
    return total
      ? Math.floor((this.state.good / this.countTotalFeedback()) * 100)
      : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <>
        <FeedbackOptions
          onClickGood={this.onClickGood}
          onClickNeutral={this.onClickNeutral}
          onClickBad={this.onClickBad}
        />

        {/* <Statistics good={} neutral={} bad={} total={} positivePercentage={}></Statistics> */}

        <div className="statistic__result">
          <h1 className="">Statistics</h1>
          <span className="">Good: {good}</span>
          <span className="">Neutral: {neutral}</span>
          <span className="">Bad: {bad}</span>
          <span className="">Total: {this.countTotalFeedback()}</span>
          <span className="">
            Positive percentage: {this.countPositivePercentage()}%
          </span>
        </div>
      </>
    );
  }
}

export default Feedback;
