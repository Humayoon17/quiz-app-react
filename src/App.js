import './App.css';
import Questions from './Questions';
import data from './data';
import { useState } from 'react';
import Alert from './Alert';
import Finished from './Finished';

function App() {
  let [questionIndex, setQuestionIndex] = useState(0);
  const [isIncorrect, setIsIncorrect] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const nextQuestion = (answer) => {
    const correctAnswer = data[questionIndex].correct_answer.toLowerCase();
    if (answer.toLowerCase() === correctAnswer) {
      if (questionIndex !== data.length - 1) {
        setIsIncorrect(false);
        setQuestionIndex(questionIndex + 1);
      } else {
        setIsFinished(true);
      }
    } else {
      setIsIncorrect(true);
      setTimeout(() => {
        setIsIncorrect(false);
      }, 5000);
    }
  };

  const resetApp = () => {
    setQuestionIndex(0);
    setIsFinished(false);
  };

  return (
    <div className='App'>
      <div className='left'>
        <h5 className='remain'>
          {isFinished ? 'Finished' : `${questionIndex + 1} / ${data.length} `}
        </h5>
        <h4>
          Quiz
          <br /> App
        </h4>
      </div>
      {isFinished ? (
        <Finished resetApp={resetApp} />
      ) : (
        <div className='right'>
          {isIncorrect && <Alert />}

          <Questions
            key={data[questionIndex].id}
            question={data[questionIndex].question}
            incorrectAnswers={data[questionIndex].incorrect_answers}
            correctAnswer={data[questionIndex].correct_answer}
            category={data[questionIndex].category}
            nextQuestion={nextQuestion}
          />
        </div>
      )}
    </div>
  );
}

export default App;
