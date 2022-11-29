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

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string,
};
