import { Statistics } from './Statistics/Statistics';
import { Component } from 'react';
import '../index.css';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
  };

  countTotalFeedback = () => {
    this.setState(prev => ({
      total: prev.good + prev.neutral + prev.bad,
    }));
  };

  changeFeedback = e => {
    this.setState(prev => ({
      [e.target.name]: prev[e.target.name] + 1,
    }));
    this.countTotalFeedback();
  };

  countPositiveFeedbackPercentage = () => {
    const res = Math.floor((this.state.good / this.state.total) * 100);
    return res ? res + '%' : '0%';
  };

  render() {
    const { good, neutral, bad, total } = this.state;
    return (
      <>
        <>
          <p>Please leave your feedback</p>

          <button
            className="btn"
            type="button"
            onClick={this.changeFeedback}
            name="good"
            value={this.state.good}
          >
            Good
          </button>

          <button
            className="btn"
            type="button"
            onClick={this.changeFeedback}
            name="neutral"
            value={this.state.neutral}
          >
            Neutral
          </button>

          <button
            className="btn"
            type="button"
            onClick={this.changeFeedback}
            name="bad"
            value={this.state.bad}
          >
            Bad
          </button>

          {total ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <p>No feedback given</p>
          )}
        </>
      </>
    );
  }
}
