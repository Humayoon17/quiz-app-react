import React from 'react';
import Answer from './Answer';

export default function Questions({
  question,
  correctAnswer,
  incorrectAnswers,
  category,
  nextQuestion,
}) {
  let answers = incorrectAnswers;
  answers = [...answers, correctAnswer];

  answers = shuffle(answers);

  // randomize an array
  function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
  }

  return (
    <div className='questions'>
      <h2
        className='question-text'
        dangerouslySetInnerHTML={{ __html: question }}
      ></h2>
      <div className='category'>
        <p>{category}</p>
      </div>
      <div className='answers'>
        {answers.map((answer, index) => (
          <Answer key={index} answer={answer} nextQuestion={nextQuestion} />
        ))}
      </div>
    </div>
  );
}
