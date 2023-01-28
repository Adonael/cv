import { useEffect, useState } from "react";
import "./App.css";
import ContactCard from "./components/ContactCard";
function App() {
  // const Contact = [
  //   { name: "Ivan", email: "ivan@mail.com", age: "28" },
  //   { name: "Marija", email: "marija@mail.com", age: "25" },
  //   { name: "Dora", email: "dora@mail.com", age: "22" },
  // ];

  const [results, setResults]=useState([]);
  
  useEffect(()=>{
    fetch("https://randomuser.me/api/?results=3")
    .then((response) => response.json())
    .then((data) => setResults(data.results));
  },[]);
  
  return (
    <div className="App">
      {results.map((item, i) => (
        <div key={i}>
          <ContactCard
          image={item.picture.large}
            name={item.name.first}
            email={item.email}
            age={item.dob.age}
          ></ContactCard>
          <br />
        </div>
      ))}
    </div>
  );
}

export default App;
