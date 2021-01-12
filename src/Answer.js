import React, { useRef } from 'react';

const Answer = ({ answer, nextQuestion }) => {
  const answerRef = useRef();

  const hanldeCorrectAnswer = () => {
    nextQuestion(answerRef.current.innerText);
  };

  return (
    <div onClick={hanldeCorrectAnswer} className='answer'>
      <h5 ref={answerRef} className='answer-text'>
        {answer}
      </h5>
    </div>
  );
};

export default Answer;
