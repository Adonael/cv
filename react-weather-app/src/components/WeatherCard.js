import "./WeatherCard.css";

const WeatherCard=(props)=>{
    return(
        <div className={props.weatherCard}>
            {props.children}
        </div>
    )
}

export default WeatherCard;