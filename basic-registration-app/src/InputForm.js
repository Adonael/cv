import "./InputForm.css";
import { useState } from "react";
const InputForm = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };

  const lastNameHandler = (e) => {
    setLastName(e.target.value);
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (name && lastName && email) {
      setValid(true);
    }
    setSubmitted(true);
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        {submitted && valid ? (
          <div className="success-msg">Thank you for your registration.</div>
        ) : null}
        <input
          type="text"
          placeholder="First Name"
          onChange={nameChangeHandler}
        ></input>
        {submitted && !name ? <span>Please enter a name.</span> : null}
        <input
          type="text"
          placeholder="Last Name"
          onChange={lastNameHandler}
        ></input>
        {submitted && !lastName ? <span>Please enter a last name.</span> : null}
        <input type="email" placeholder="Email" onChange={emailHandler}></input>
        {submitted && !email ? <span>Please enter a email.</span> : null}
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default InputForm;
