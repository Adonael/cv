import "./ClearButton.css";

const ClearButton = (props) => {
  return (
    <button className="clear-btn" onClick={props.handleClear}>
      {props.children}
      </button>
  );
};

export default ClearButton;
