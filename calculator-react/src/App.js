import "./App.css";
import Button from "./components/Button.js";
import Input from "./components/Input";
import { useState } from "react";
import * as math from "mathjs";
import ClearButton from "./components/ClearButton";

function App() {
  const [state, setState] = useState("");

  const onClickHandler = (e) => {
    setState((oldState) => oldState.concat(e));
  };

  const onClearHandler=()=>{
    setState("");
  }

  const onClickEqual = () => {
    setState(math.evaluate(state));
  };

  return (
    <div className="App">
      <div className="display">
        <Input>{state}</Input>
        <div className="row">
          <Button handleClick={onClickHandler}>7</Button>
          <Button handleClick={onClickHandler}>8</Button>
          <Button handleClick={onClickHandler}>9</Button>
          <Button handleClick={onClickHandler}>/</Button>
        </div>
        <div className="row">
          <Button handleClick={onClickHandler}>4</Button>
          <Button handleClick={onClickHandler}>5</Button>
          <Button handleClick={onClickHandler}>6</Button>
          <Button handleClick={onClickHandler}>*</Button>
        </div>
        <div className="row">
          <Button handleClick={onClickHandler}>1</Button>
          <Button handleClick={onClickHandler}>2</Button>
          <Button handleClick={onClickHandler}>3</Button>
          <Button handleClick={onClickHandler}>+</Button>
        </div>
        <div className="row">
          <Button handleClick={onClickHandler}>.</Button>
          <Button handleClick={onClickHandler}>0</Button>
          <Button handleClick={onClickEqual}>=</Button>
          <Button handleClick={onClickHandler}>-</Button>
        </div>
        <div className="row">
          <ClearButton handleClear={onClearHandler}>Clear</ClearButton>
        </div>
      </div>
    </div>
  );
}

export default App;
