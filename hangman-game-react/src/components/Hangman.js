import image1 from "../images/4.jpg";
import image2 from "../images/5.jpg";
import image3 from "../images/6.jpg";
import image4 from "../images/7.jpg";
import image5 from "../images/8.jpg";
import image6 from "../images/9.jpg";
import image7 from "../images/10.jpg";

const Hangman = (props) => {
  return (
    <div className="hangmanImage">
      {props.wrongCounter === 0 && <img src={image1} alt="image1"></img>}
      {props.wrongCounter === 1 && <img src={image2} alt="image2"></img>}
      {props.wrongCounter === 2 && <img src={image3} alt="image3"></img>}
      {props.wrongCounter === 3 && <img src={image4} alt="image4"></img>}
      {props.wrongCounter === 4 && <img src={image5} alt="image5"></img>}
      {props.wrongCounter === 5 && <img src={image6} alt="image6"></img>}
      {props.wrongCounter === 6 && <img src={image7} alt="image7"></img>}
    </div>
  );
};

export default Hangman;
