import { useState } from "react";
import "./App.css";
import Input from "./components/Input";
function App() {
  const WORDS = ["react", "javascript", "angular"];
  const [word, setWord] = useState(
    WORDS[Math.floor(Math.random() * WORDS.length)]
  );

  return (
    <div className="App">
      <Input word={word} />
    </div>
  );
}

export default App;
