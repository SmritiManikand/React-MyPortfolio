
import React from 'react';
import Quiz from './Quiz';
import questions from '../../data/questions';
import { useNavigate } from 'react-router-dom';

const QuizPage = () => {
  const navigate = useNavigate();

  const handleFinishQuiz = (finalScore, totalQuestions) => {
    navigate('/result', { state: { score: finalScore, total: totalQuestions } });
  };

  return (
    <div className="container">
      <Quiz questions={questions} onFinish={handleFinishQuiz} />
    </div>
  );
};

export default QuizPage;
