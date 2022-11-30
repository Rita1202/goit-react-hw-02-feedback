import PropTypes from 'prop-types';
import { Component } from 'react';

export class FeedbackOptions extends Component {
  render() {
    return (
      <>
        {Object.keys(this.props.options).map(el => {
          return (
            <button
              key={el}
              className="btn"
              type="button"
              onClick={() => this.props.onLeaveFeedback(el)}
              name={el}
              value={this.props.el}
            >
              {el}
            </button>
          );
        })}
      </>
    );
  }
}

FeedbackOptions.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
  }).isRequired,
  onLeaveFeedback: PropTypes.func,
};
