import "./share.scss";
import Image from "../../assets/img.png";
import Map from "../../assets/map.png";
import PlaceIcon from '@mui/icons-material/Place';
import Friend from "../../assets/friend.png";
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import { useContext } from "react";
import PeopleIcon from '@mui/icons-material/People';
import { AuthContext } from "../../context/authContext";

const Share = () => {

  const {currentUser} = useContext(AuthContext)
  return (
    <div className="share">
      <div className="container">
        <div className="top">
          <img
            src={currentUser.profilePic}
            alt=""
          />
          <input type="text" placeholder={`What's on your mind ${currentUser.name}?`} />
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <input type="file" id="file" style={{display:"none"}} />
            <label htmlFor="file">
              <div className="item">
                <InsertPhotoIcon/>
                <span>Add Image</span>
              </div>
            </label>
            <div className="item">
              <PlaceIcon/>
              {/* <img src={Map} alt="" /> */}
              <span>Add Place</span>
            </div>
            <div className="item">
              {/* <img src={Friend} alt="" /> */}
              <PeopleIcon/>
              <span>Tag Friends</span>
            </div>
          </div>
          <div className="right">
            <button>Share</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share;
