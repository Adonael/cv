import { useState, useEffect } from "react";
import Hangman from "./Hangman";
import "./Input.css";

const Input = (props) => {
  const string = props.word.split("");
  const [wrong, setWrong] = useState([]);
  const [wrongCounter, setWrongCounter] = useState(0);
  const [guess, setGuess] = useState([]);
  const [win, setWin] = useState(false);

  useEffect(() => {
    const onKeydownHandler = (e) => {
      if (string.includes(e.key) && e.keyCode > 64 && e.keyCode < 91) {
        setGuess([...guess, e.key]);
        console.log(e.keyCode);
      } else {
        if (wrong.includes(e.key) || e.keyCode < 64) {
          console.log(e.keyCode);
          return;
        } else {
          setWrong([...wrong, e.key]);
          setWrongCounter(wrongCounter + 1);
        }
      }
    };

    if (wrongCounter === 6) {
      return () => {
        document.removeEventListener("keydown", onKeydownHandler);
      };
    }

    if (win) {
      return () => {
        document.removeEventListener("keydown", onKeydownHandler);
      };
    }

    if (string.every((letter) => guess.includes(letter))) {
      setWin(true);
    }

    document.addEventListener("keydown", onKeydownHandler);

    return () => document.removeEventListener("keydown", onKeydownHandler);
  }, [guess, wrong, string, wrongCounter, win]);

  return (
    <div className="container">
      <div className="illustration">
        <Hangman wrongCounter={wrongCounter} />
      </div>
      {wrongCounter === 6 ? (
        <div className="gameOver">
          <p>You lost, press the button to try again!</p>
          <button onClick={() => window.location.reload()}>Try again</button>
        </div>
      ) : (
        ""
      )}
      {win && (
        <div className="gameOver">
          <p>You won, press the button to start new game!</p>
          <button onClick={() => window.location.reload()}>Try again</button>
        </div>
      )}
      <div className="header">
        <h2>Press a key to start guessing the hidden word</h2>
      </div>
      <p className="word">
        {string.map((letter) => (guess.includes(letter) ? letter : "_ "))}
      </p>
      <div className="wrongLetters">
        <p>Wrong({wrongCounter}/6):</p>
        {wrong.map((letter, i) => {
          return <span key={i}>{letter} </span>;
        })}
      </div>
    </div>
  );
};

export default Input;
