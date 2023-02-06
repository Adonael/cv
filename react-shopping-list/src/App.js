import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faSortDown,
  faSortUp,
} from "@fortawesome/free-solid-svg-icons";

function App() {
  const [sum, setSum] = useState(0);
  const [input, setInput] = useState("");
  const [item, setItem] = useState([]);

  const onChangeHandler = (e) => {
    console.log(e.target.value);
    setInput(e.target.value);
  };

  const onClickHandler = () => {
    const newItem = { name: input, quantity: 1, isChecked: false };
    const newItems = [...item, newItem];
    setItem(newItems);
    setInput("");
    calculateTotal();
  };

  const handleCheck = (index) => {
    const newItems = [...item];
    newItems[index].isChecked = !newItems[index].isChecked;
    setItem(newItems);
  };

  const onClickDecrease = (index) => {
    const newItems = [...item];
    newItems[index].quantity--;
    if(newItems[index].quantity===0){
      const temp=newItems.filter((item,i)=>i!==index);
      setItem(temp);
    }else{
      setItem(newItems);
    }
    
    calculateTotal();
  };

  const onClickIncrease = (index) => {
    const newItems = [...item];
    newItems[index].quantity++;
    setItem(newItems);
    calculateTotal();
  };

  useEffect(() => {
    calculateTotal();
  });

  const calculateTotal = () => {
    const totalCount = item.reduce((total, item) => {
      return total + item.quantity;
    }, 0);

    setSum(totalCount);
  };

  return (
    <div className="App">
      <Card>
        <div className="inputField">
        <input
          type="text"
          placeholder="Add an item..."
          onChange={onChangeHandler}
          value={input}
        ></input>
        <FontAwesomeIcon icon={faPlus} className="addButton" onClick={onClickHandler} />
        </div>
        {item.map((task, i) => {
          return (
            task.name && (
              <div className="tasks" key={i}>
                <div className="taskName">
                  <p
                    className={
                      item[i].isChecked === true ? "checked" : "taskItem"
                    }
                  >
                    <input
                      type="checkbox"
                      onChange={() => {
                        handleCheck(i);
                      }}
                    ></input>
                    {task.name}
                  </p>
                </div>
                <div className="taskQuantity">
                  <FontAwesomeIcon
                    icon={faSortDown}
                    className="quantityButton"
                    onClick={() => {
                      onClickDecrease(i);
                    }}
                  />{" "}
                  {task.quantity}{" "}
                  <FontAwesomeIcon
                    icon={faSortUp}
                    className="quantityButton"
                    onClick={() => {
                      onClickIncrease(i);
                    }}
                  />
                </div>
              </div>
            )
          );
        })}
        <p>Total:{sum}</p>
      </Card>
    </div>
  );
}

export default App;
