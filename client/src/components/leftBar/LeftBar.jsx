import "./leftBar.scss";
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import GroupWorkIcon from '@mui/icons-material/GroupWork';
import StorefrontIcon from '@mui/icons-material/Storefront';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import InsertInvitationIcon from '@mui/icons-material/InsertInvitation';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import CollectionsIcon from '@mui/icons-material/Collections';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import PaidIcon from '@mui/icons-material/Paid';
import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebook';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import Friends from "../../assets/1.png";
import Groups from "../../assets/2.png";
import Market from "../../assets/3.png";
import Watch from "../../assets/4.png";
import Memories from "../../assets/5.png";
import Events from "../../assets/6.png";
import Gaming from "../../assets/7.png";
import Gallery from "../../assets/8.png";
import Videos from "../../assets/9.png";
import Messages from "../../assets/10.png";
import Tutorials from "../../assets/11.png";
import Courses from "../../assets/12.png";
import Fund from "../../assets/13.png";
import { AuthContext } from "../../context/authContext";
import { useContext } from "react";

const LeftBar = () => {

  const { currentUser } = useContext(AuthContext);

  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu">
          <div className="user">
          </div>
          <div className="item">
            <PeopleAltIcon/>
            {/* <img src={Friends} alt="" /> */}
            <span>Friends</span>
          </div>
          <div className="item">
            <GroupWorkIcon/>
            {/* <img src={Groups} alt="" /> */}
            <span>Groups</span>
          </div>
          <div className="item">
            <StorefrontIcon/>
            {/* <img src={Market} alt="" /> */}
            <span>Marketplace</span>
          </div>
          <div className="item">
            {/* <img src={Watch} alt="" /> */}
            <WatchLaterIcon/>
            <span>Watch</span>
          </div>
          <div className="item">
            {/* <img src={Memories} alt="" /> */}
            <CalendarMonthIcon/>
            <span>Memories</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Your shortcuts</span>
          <div className="item">
            {/* <img src={Events} alt="" /> */}
            <InsertInvitationIcon/>
            <span>Events</span>
          </div>
          <div className="item">
            {/* <img src={Gaming} alt="" /> */}
            <SportsEsportsIcon/>
            <span>Gaming</span>
          </div>
          <div className="item">
            {/* <img src={Gallery} alt="" /> */}
            <CollectionsIcon/>
            <span>Gallery</span>
          </div>
          <div className="item">
            {/* <img src={Videos} alt="" /> */}
            <VideoCameraBackIcon/>
            <span>Videos</span>
          </div>
          <div className="item">
            {/* <img src={Messages} alt="" /> */}
            <ChatBubbleIcon/>
            <span>Messages</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Others</span>
          <div className="item">
            {/* <img src={Fund} alt="" /> */}
            <PaidIcon/>
            <span>Fundraiser</span>
          </div>
          <div className="item">
            {/* <img src={Tutorials} alt="" /> */}
            <LaptopChromebookIcon/>
            <span>Tutorials</span>
          </div>
          <div className="item">
            {/* <img src={Courses} alt="" /> */}
            <MenuBookIcon/>
            <span>Courses</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
