import React, { useState } from "react";
import FeedbackOptions from "./feedbackOptions/FeedbackOptions";
import Notification from "./Notification";
import Section from "./Section";
import Statistics from "./statistics/Statistics";

const options = [
  { name: "good", title: "Good" },
  { name: "neutral", title: "Neutral" },
  { name: "bad", title: "Bad" },
];
const initialState = {
  good: 0,
  neutral: 0,
  bad: 0,
};

const App = () => {
  const [state, setState] = useState(initialState);

  const addFeedback = (e) => {
    const btn = e.target.name;

    setState((prev) => ({ ...prev, [btn]: prev[btn] + 1 }));
  };

  const countTotalFeedback = () => {
    const { good, neutral, bad } = state;
    const total = good + neutral + bad;
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();

    return total ? Math.round((state.good * 100) / total) : 0;
  };

  const total = countTotalFeedback();
  const result = countPositiveFeedbackPercentage();

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions onLeaveFeedback={addFeedback} options={options} />
      </Section>

      <Section title="Statistics">
        {total ? (
          <Statistics
            good={state.good}
            neutral={state.neutral}
            bad={state.bad}
            total={total}
            positivFeedback={result}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>
    </>
  );
};

export default App;
