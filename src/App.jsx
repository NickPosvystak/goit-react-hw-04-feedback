import React, { Component } from 'react';
import Section from 'components/Section/Section';
import Statistics from 'components/Statistics/Statistics';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Notification from 'components/Notification/Notification';
import css from './App.module.css';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  onLeaveFeedback = value => {
    this.setState(prevStates => ({ [value]: prevStates[value] + 1 }));
  };
  countTotalFeedback = ({ good, neutral, bad }) => good + neutral + bad;
  countPositiveFeedbackPercentage = () => {
    const totalFeedback = this.countTotalFeedback(this.state);
    return Math.round((this.state.good / totalFeedback) * 100);
  };

  render() {
    return (
      <div className={css.container}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>

        <Section title="Statistics">
          {this.countTotalFeedback(this.state) ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback(this.state)}
              positive={this.countPositiveFeedbackPercentage(this.state)}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}
