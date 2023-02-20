import "./CityDisplay.css"


const CityDisplay=(props)=>{
    const date=new Date();
    const time=date.toLocaleDateString("fr-CH");
    
    return(
        <div className="display">
            <h2>{props.name},{props.country}</h2>
            <p>{time}</p>
            <p className="tempDisplay">{props.temp}&deg;C</p>
            <p>{props.description}</p>
        </div>
    )
}


export default CityDisplay;