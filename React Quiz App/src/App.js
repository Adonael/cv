import "./App.css";
import { useState } from "react";
import QuestionCard from "./QuestionCard";
function App() {
  const [correct, setCorrect] = useState(false);
  const questions = [
    {
      title: "What is the capital of France?",
      answers: [
        {
          answer: "Tokio",
          isCorrect: false,
        },
        { answer: "Paris", isCorrect: true },
        {
          answer: "New York",
          isCorrect: false,
        },
        { answer: "London", isCorrect: false },
      ],
    },
    {
      title: "What year did WW2 begin?",
      answers: [
        {
          answer: "1918",
          isCorrect: false,
        },
        { answer: "1938", isCorrect: false },
        {
          answer: "1939",
          isCorrect: true,
        },
        { answer: "1945", isCorrect: false },
      ],
    },
    {
      title: "Warmest season?",
      answers: [
        {
          answer: "Winter",
          isCorrect: false,
        },
        { answer: "Autmun", isCorrect: false },
        {
          answer: "Summer",
          isCorrect: true,
        },
        { answer: "Spring", isCorrect: false },
      ],
    },
    {
      title: "Days in a year?",
      answers: [
        {
          answer: "375",
          isCorrect: false,
        },
        { answer: "385", isCorrect: false },
        {
          answer: "365",
          isCorrect: true,
        },
        { answer: "367", isCorrect: false },
      ],
    },
  ];

  return (
    <div className="App">
      <QuestionCard questionHandler={questions} />
    </div>
  );
}

export default App;
