import React, { Component } from 'react';
import Section from './components/section/section';
import Statistics from './components/statistics/statistics';
import FeedbackOptions from './components/feedbackOptions/feedbackOptions';
import NoFeedback from './components/noFeedback/noFeedback';
import styles from './app.module.css';

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
    const allFeedback = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    return (
      <div className={styles.container}>
        <Section title="Please leave feedback">
          <FeedbackOptions options={this.options} onLeaveFeedback={this.handleFeedback} />
        </Section>
        <Section title="Statistics">
          {allFeedback ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={allFeedback}
              positivePercentage={positivePercentage}
            />
          ) : (
            <NoFeedback message="No feedback :(" />
          )}
        </Section>
      </div>
    );
  }
}
