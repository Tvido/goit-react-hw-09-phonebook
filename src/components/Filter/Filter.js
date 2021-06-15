import React from 'react';

import './Filter.css';

const Filter = ({ value, onChange }) => (
  <label className="filter">
    Find contacts by name
    <input type="text" value={value} onChange={onChange}></input>
  </label>
);

export default Filter;
