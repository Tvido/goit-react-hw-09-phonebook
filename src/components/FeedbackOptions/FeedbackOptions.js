import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

// const FeedbackOptions = ({ onClickGood, onClickNeutral, onClickBad }) => (
//   <div className="">
//     <h1 className="">Please leave feedback</h1>
//     <button type="button" onClick={onClickGood} className="">
//       Good
//     </button>
//     <button type="button" onClick={onClickNeutral} className="">
//       Neutral
//     </button>
//     <button type="button" onClick={onClickBad} className="">
//       Bad
//     </button>
//   </div>
// );

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map(option => (
        <button
          className=""
          key={shortid.generate()}
          type="button"
          name={option}
          onClick={onLeaveFeedback}
        >
          {option}
        </button>
      ))}
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;
