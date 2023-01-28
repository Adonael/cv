import { useState } from "react";
import "./ContactCard.css";

const ContactCard = (props) => {
  const [age, isAge] = useState(false);
  const onClickHandler = () => {
    isAge(!age);
  };
  return (
    <div className="contactCard">
      <div className="contactImage">
        <img src={props.image} alt="placeholder" />
      </div>
      <div className="contactInfo">
        <p>Name:{props.name}</p>
        <p>Email:{props.email}</p>
        <button onClick={onClickHandler}>Show Age</button>
        {age && <p>Age:{props.age}</p>}
      </div>
    </div>
  );
};

export default ContactCard;
