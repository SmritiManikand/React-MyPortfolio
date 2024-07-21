
import React from 'react';

const Progress = ({ current, total }) => {
  return (
    <div>
      <h3>Question {current} of {total}</h3>
    </div>
  );
};

export default Progress;
