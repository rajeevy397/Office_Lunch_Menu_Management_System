import React from 'react';

function Employee({ name, lunchChoice }) {
  return (
    <div>
      <h3>Name: {name}</h3>
      <p>Lunch Choice: {lunchChoice}</p>
    </div>
  );
}

export default Employee;
