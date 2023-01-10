import "./QuestionCard.css";
import { useState, Fragment } from "react";
const QuestionCard = (props) => {
  var [counter, setCounter] = useState(0);
  var [correct, setCorrect] = useState(0);
  const [questionCounter, setQuestionCounter] = useState(true);
  const questionGenerator = props.questionHandler[counter].answers.map(
    (item) => {
      return (
        <li
          onClick={() => {
            if (item.isCorrect) {
              setCorrect(correct + 1);
            }
            if (counter < props.questionHandler.length - 1) {
              setCounter(counter + 1);
            } else {
              setQuestionCounter(false);
            }
          }}
          key={item.answer}
          className="answer"
        >
          {item.answer}
        </li>
      );
    }
  );

  return (
    <Fragment>
      {questionCounter ? (
        <div className="questions">
          <div className="info">
            <h3 className="questionTitle">
              Question {counter + 1}/{props.questionHandler.length}
            </h3>
            <p className="questionText">
              {props.questionHandler[counter].title}
            </p>
          </div>
          <div className="answers">
            <ul>
              {questionGenerator}
              {console.log(counter, props.questionHandler.length)}
            </ul>
          </div>
        </div>
      ) : (
        <div className="questions">
          <h2>Game over, you have {correct} correct answers out of {props.questionHandler.length}!</h2>
        </div>
      )}
    </Fragment>
  );
};

export default QuestionCard;
