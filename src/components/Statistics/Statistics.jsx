import PropTypes from 'prop-types';
import { Component } from 'react';

export class Statistics extends Component {
  render() {
    return (
      <>
        <p>Statistics:</p>
        <p>Good: {this.props.good}</p>
        <p>Neutral: {this.props.neutral}</p>
        <p>Bad: {this.props.bad}</p>

        <p>Positive: {this.props.positivePercentage}</p>
      </>
    );
  }
}
