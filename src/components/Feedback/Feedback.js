import { Component } from 'react';
import PropTypes from 'prop-types';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Statistics from '../Statistics';
import Notification from '../Message';
import Section from '../Section';

class Feedback extends Component {
  static defaultProps = {
    initialGood: 0,
    initialNeutral: 0,
    initialBad: 0,
    initialTotal: 0,
    initialPositivePercentage: 0,
  };

  static propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    percent: PropTypes.number,
  };

  state = {
    good: this.props.initialGood,
    neutral: this.props.initialNeutral,
    bad: this.props.initialBad,
    // total: this.props.initialTotal,
    // positivePercentage: this.props.initialPositivePercentage,
  };

  // onClickGood = () => {
  //   this.setState(prevState => ({
  //     good: prevState.good + 1,
  //   }));
  // };

  // onClickNeutral = () => {
  //   this.setState(prevState => ({
  //     neutral: prevState.neutral + 1,
  //   }));
  // };

  // onClickBad = () => {
  //   this.setState(prevState => ({
  //     bad: prevState.bad + 1,
  //   }));
  // };

  countTotalFeedback = () =>
    this.state.good + this.state.bad + this.state.neutral;

  countPositivePercentage = () => {
    const total = this.countTotalFeedback();
    return total
      ? Math.floor((this.state.good / this.countTotalFeedback()) * 100)
      : 0;
  };

  onLeaveFeedback = e => {
    const name = e.target.name;
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const percent = this.countPositivePercentage();
    const objectKey = Object.keys(this.state);

    return (
      <>
        {/* <FeedbackOptions
          onClickGood={this.onClickGood}
          onClickNeutral={this.onClickNeutral}
          onClickBad={this.onClickBad}
        /> */}
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={objectKey}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        {this.countTotalFeedback() === 0 ? (
          <Notification message="No feedback given" />
        ) : (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              percent={percent}
            />
          </Section>
        )}
      </>
    );
  }
}

export default Feedback;
