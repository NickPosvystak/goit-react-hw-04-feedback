import { useState } from 'react';
import Section from 'components/Section/Section';
import Statistics from 'components/Statistics/Statistics';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Notification from 'components/Notification/Notification';
import css from './App.module.css';

export const App = () => {

  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  const onLeaveFeedback = value => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [value]: prevFeedback[value] + 1,
    }));
     };
  // onLeaveFeedback();

  const countTotalFeedback = () => {
    const { good, neutral, bad } = feedback;
    return good + neutral + bad;
  };
  // countTotalFeedback();
  
  
  const countPositiveFeedbackPercentage = () => {
    const totalFeedback = countTotalFeedback();
    const { good } = feedback;
    return totalFeedback === 0 ? 0 : Math.round((good / totalFeedback) * 100);
  };
  // countPositiveFeedbackPercentage();

  return (
    <div className={css.container}>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(feedback)}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>

      <Section title="Statistics">
        {countTotalFeedback() ? (
          <Statistics
            good={feedback.good}
            neutral={feedback.neutral}
            bad={feedback.bad}
            total={countTotalFeedback(setFeedback)}
            positive={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
};
