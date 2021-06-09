import React from 'react';

const Statistic = ({ good, neutral, bad, total, percent }) => (
  <ul>
    <li className="">Good: {good}</li>
    <li className="">Neutral: {neutral}</li>
    <li className="">Bad: {bad}</li>
    <li className="">Total: {total}</li>
    <li className="">Positive percentage: {percent}%</li>
  </ul>
);

export default Statistic;
