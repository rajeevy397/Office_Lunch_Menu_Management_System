import React from 'react';

function Menu({ date, options }) {
  return (
    <div>
      <h3>Date: {date}</h3>
      <ul>
        {options.map((option, index) => (
          <li key={index}>{option}</li>
        ))}
      </ul>
    </div>
  );
}

export default Menu;
