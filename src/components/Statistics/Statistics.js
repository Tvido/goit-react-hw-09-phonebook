import React from 'react';

const Statistic = ({ good, neutral, bad, total, percent }) => (
  // <ul>
  //   <li className="">Good: {good}</li>
  //   <li className="">Neutral: {neutral}</li>
  //   <li className="">Bad: {bad}</li>
  //   <li className="">Total: {total}</li>
  //   <li className="">Positive percentage: {positivePercentage}%</li>
  // </ul>
  <>
    <p className="">Good: {good}</p>
    <p className="">Neutral: {neutral}</p>
    <p className="">Bad: {bad}</p>
    <p className="">Total: {total}</p>
    <p className="">Positive percentage: {percent}%</p>
  </>
);

export default Statistic;
