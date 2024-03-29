import "../styles/Menu.scss";
import { ReactComponent as Home } from "../images/home.svg";
import { ReactComponent as Explore } from "../images/explore.svg";
import { ReactComponent as Inbox } from "../images/inbox.svg";
import { ReactComponent as Notifications } from "../images/notifications.svg";
import image from "../images/searchIcon.png"
import ProfileIcon from "./ProfileIcon";

const Menu=()=>{
    return(
        <div className="menu">
            <Home className="icon"/>
            <Inbox className="icon"/>
            <Explore className="icon"/>
            <Notifications className="icon"/>
            <ProfileIcon iconSize="small" storyBorder={true}/>
        </div>
    )
}



export default Menu;