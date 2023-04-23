import "../styles/Navigation.scss";
import logo from "../images/igTextLogo.png";
import searchIcon from "../images/searchIcon.png";
import Menu from "./Menu.js";


const Navigation=()=>{
    return(
        <div className="navigation">
            <div className="container">
                <img className="logo" src={logo} alt="instagram logo"></img>
                <div className="searchbar">
                    <img className="searchIcon" src={searchIcon} alt="search icon"></img>
                    <span className="searchText">Search</span>
                </div>
                <Menu/>
            </div>
        </div>
    )
}


export default Navigation;