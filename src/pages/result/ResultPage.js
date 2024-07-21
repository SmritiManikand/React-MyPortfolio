
import React from 'react';
import { useLocation } from 'react-router-dom';
import Score from './Score';

const ResultPage = () => {
  const location = useLocation();
  const { score, total } = location.state || { score: 0, total: 0 };

  return (
    <div className="container">
      <Score score={score} total={total} />
    </div>
  );
};

export default ResultPage;
