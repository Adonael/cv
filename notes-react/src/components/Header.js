import "./Header.css";


const Header=({handleColorChange})=>{
    return(
        <div className="header">
          <h1>Notes</h1>
          <button className="toggle" onClick={()=>handleColorChange()}>
            Toggle Mode
          </button>
        </div>
    )
}


export default Header;