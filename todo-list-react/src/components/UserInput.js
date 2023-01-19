import { Fragment, useState } from "react";
import "./UserInput.css";
const UserInput = () => {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  let [counter, setCounter] = useState(0);

  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const generateList = () => {
    setList([...list, { name: input, isCompleted: false }]);
    setCounter(counter + 1);
    setInput("");
  };

  const deleteTask = (index) => {
    const temp = list.filter((item, i) => i !== index);
    setList(temp);
  };

  const checkTask = (index) => {
    setList((prevData) => {
      const newData = prevData.map((item, i) => {
        if (i === index) {
          return { ...item, isCompleted: true };
        }
        return item;
      });
      return newData;
    });
  };

  return (
    <Fragment>
      <input
        type="text"
        value={input}
        onChange={inputHandler}
        id="listInput"
      ></input>
      <button onClick={generateList}>Add Task</button>
      {list.length > 0 && (
        <ul>
          {list.map((item, i) => {
            return (
              <div className="itemList" key={i}>
                <button
                  key={"buttonX" + i}
                  className="remove"
                  onClick={() => {
                    deleteTask(i);
                  }}
                >
                  X
                </button>
                <li
                  key={i}
                  className={item.isCompleted === true ? "check" : "item"}
                >
                  {item.name}
                </li>
                <button
                  key={"button" + i}
                  onClick={() => {
                    checkTask(i);
                  }}
                >
                  Check
                </button>
              </div>
            );
          })}
        </ul>
      )}
    </Fragment>
  );
};

export default UserInput;
