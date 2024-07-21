
import React, { useState } from 'react';
import Question from './Question';
import Progress from './Progress';

const Quiz = ({ questions, onFinish }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [score, setScore] = useState(0);

  const handleAnswer = (answer) => {
    const currentQuestion = questions[currentQuestionIndex];
    const isCorrect = currentQuestion.correctAnswer === answer;

    setAnswers([...answers, { questionId: currentQuestion.id, answer }]);
    setScore(prevScore => prevScore + (isCorrect ? 1 : 0));

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      onFinish(score + (isCorrect ? 1 : 0), questions.length);
    }
  };

  return (
    <div className="container">
      <Progress current={currentQuestionIndex + 1} total={questions.length} />
      <Question
        question={questions[currentQuestionIndex]}
        handleAnswer={handleAnswer}
      />
      {currentQuestionIndex === questions.length - 1 && (
        <button className="button" onClick={() => onFinish(score, questions.length)}>
          Submit
        </button>
      )}
    </div>
  );
};

export default Quiz;
