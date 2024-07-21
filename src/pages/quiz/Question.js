
import React from 'react';

const Question = ({ question, handleAnswer }) => {
  const renderOptions = () => {
    return question.options.map((option, index) => (
      <button
        key={index}
        className="button"
        onClick={() => handleAnswer(option)}
      >
        {option}
      </button>
    ));
  };

  return (
    <div>
      <h2>{question.text}</h2>
      {question.type === 'multiple-choice' ? (
        <div>{renderOptions()}</div>
      ) : (
        <div>
          <input
            type="text"
            onBlur={(e) => handleAnswer(e.target.value)}
            style={{ padding: '10px', fontSize: '16px' }}
          />
        </div>
      )}
    </div>
  );
};

export default Question;
