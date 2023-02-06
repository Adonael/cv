import "./Card.css";

const Card=(props)=>{
    return(
        <div className="itemCard">
            {props.children}
        </div>
    )
}


export default Card;