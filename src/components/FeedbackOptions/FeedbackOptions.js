import React from 'react';

const FeedbackOptions = ({ onClickGood, onClickNeutral, onClickBad }) => (
  <div className="">
    <h1 className="">Please leave feedback</h1>
    <button type="button" onClick={onClickGood} className="">
      Good
    </button>
    <button type="button" onClick={onClickNeutral} className="">
      Neutral
    </button>
    <button type="button" onClick={onClickBad} className="">
      Bad
    </button>
  </div>
);

export default FeedbackOptions;
