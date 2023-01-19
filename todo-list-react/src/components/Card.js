import "./Card.css";
const Card = (props) => {
  return (
    <div className="container">
      <div className="title">
        <h3>ToDo List</h3>
      </div>
      <div className="content">{props.children}</div>
    </div>
  );
};

export default Card;
