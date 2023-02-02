import "./RecipeCard.css";

const RecipeCard=(props)=>{
    return(
        props.item.map((result, i) => (
            <div key={i} className="card">
                <h2>{result.recipe.label}</h2>
               {result.recipe.ingredientLines.map((item,i)=>(
                    <p key={i} className="ingredients">{i+1}. {item}</p>
                ))}
                <img src={result.recipe.image} alt="img"></img>
              <br />
            </div>
          ))
    )
}

export default RecipeCard;

  // <div className="card">
        //     Name:{props.item[0].recipe.label}
        //     <img src={props.item[0].recipe.image} alt="img"></img>
        // </div>

