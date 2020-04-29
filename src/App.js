import React, { Component } from 'react';
import Section from './components/section/section';
import Statistics from './components/statistics/statistics';
import FeedbackOptions from './components/feedbackOptions/feedbackOptions';
import NoFeedback from './components/noFeedback/noFeedback';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  options = Object.keys(this.state);

  handleFeedback = e => {
    const target = e.target.name;

    this.setState(state => ({
      [target]: state[target] + 1,
    }));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    const allFeedback = this.countTotalFeedback();
    const positiveFeedback = this.state.good;

    return Math.round((positiveFeedback * 100) / allFeedback);
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions options={this.options} onLeaveFeedback={this.handleFeedback} />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <NoFeedback message="No feedback :(" />
          )}
        </Section>
      </div>
    );
  }
}
