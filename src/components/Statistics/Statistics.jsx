import PropTypes from 'prop-types';
import { Component } from 'react';
import css from './Statistics.module.css';

export class Statistics extends Component {
  render() {
    return (
      <>
        <ul>
          <li>
            Good: <span className={css.number}>{this.props.good}</span>
          </li>
          <li>
            Neutral: <span className={css.number}>{this.props.neutral}</span>
          </li>
          <li>
            Bad: <span className={css.number}>{this.props.bad}</span>
          </li>
          <li>
            Total: <span className={css.number}>{this.props.total}</span>
          </li>
          <li>
            Positive feedback:
            <span className={css.number}> {this.props.positivePercentage}</span>
          </li>
        </ul>
      </>
    );
  }
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};
