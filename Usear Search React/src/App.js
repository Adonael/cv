import { useState } from "react";
import "./App.css";

function App() {
  const users = [
    {
      key:1,
      name: "Pero",
    },
    {
      key:2,
      name: "Vesna",
    },
    {
      key:3,
      name: "Ivan",
    },
    {
      key:4,
      name: "Marija",
    },
    {
      key:5,
      name: "Dora",
    },
    {
      key:6,
      name: "Goran",
    },
    {
      key:7,
      name: "Dario",
    },
    {
      key:8,
      name: "Josip",
    }
  ];


  const [search, setSearch]=useState("");

  const onChangeHandler=(e)=>{
    setSearch(e.target.value)
  };

  const userList=users.filter(user=>user.name.toLowerCase().includes(search.toLowerCase())).map((user,key) => {
    return <h2 key={key}>{user.name}</h2>;
  });


  return (
    <div className="App">
      <input type="text" placeholder="Search..." onChange={onChangeHandler}></input>
      {userList}

    </div>
  );
  }

export default App;
