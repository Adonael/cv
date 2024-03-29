import "../styles/sidebar.scss";
import Sticky from "react-sticky-el";
import Profile from "./Profile";
import Suggestions from "./Suggestions";
import Footer from "./Footer";
import image from "../images/searchIcon.png";

const Sidebar = () => {
  return (
      <Sticky topOffset={-80}>
        <div className="sidebar">
          <Profile
            username="ivan.maras"
            caption="Ivan Maras"
            urlText="Switch"
            iconSize="big"
            image={image}
          />
          <Suggestions />
          <Footer/>
        </div>
      </Sticky>
  );
};

export default Sidebar;
