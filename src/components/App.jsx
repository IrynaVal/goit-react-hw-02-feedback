import React, { Component } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

const buttonOptions = ['Good', 'Neutral', 'Bad'];

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = () => {
    // console.log(3);
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };
  // handleBtnClick = e => {
  //   this.setState(prevState => {
  //     let newState = { ...prevState };
  //     for (const key in newState) {
  //       if (key === e.target.textContent) {
  //         newState[key] += 1;
  //       }
  //     }
  //     return newState;
  //   });
  // };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    return ((this.state.good * 100) / this.countTotalFeedback()).toFixed(0);
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={buttonOptions}
            onLeaveFeedback={this.handleFeedback}
          />
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
            <Notification message="There is no feedback"></Notification>
          )}
        </Section>
      </>
    );
  }
}
