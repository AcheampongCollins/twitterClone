import React from "react";
import "./Tweet.scss";
import pic from "../assets/image/collins.jpg";
import { GiWorld } from "react-icons/gi";
import { VscFileMedia } from "react-icons/vsc";
import { AiOutlineFileGif, AiOutlineSchedule } from "react-icons/ai";
import { BiPoll } from "react-icons/bi";
import { BsEmojiSmile } from "react-icons/bs";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FiPlus } from "react-icons/fi";

function Tweet() {
  return (
    <div className="container">
      <div>
        {" "}
        <img src={pic} alt="profileImage" className="image" />
      </div>
      <div className="tweetContainer">
        <textarea placeholder="What's happening?" className="textarea" />
        <button className="btn">
          <GiWorld style={{ marginRight: "5px" }} /> Everyone can reply
        </button>
        <div className="mainDiv">
          <div className="containerDiv">
            <div className="iconDiv">
              <VscFileMedia className="icon" />
              <p>Media</p>
            </div>
            <div className="iconDiv">
              <AiOutlineFileGif className="icon" />
              <p>GIF</p>
            </div>
            <div className="iconDiv">
              <BiPoll className="icon" />
              <p>Poll</p>
            </div>
            <div className="iconDiv">
              <BsEmojiSmile className="icon" /> <p>Emoji</p>
            </div>
            <div className="iconDiv">
              <AiOutlineSchedule className="icon" />
              <p>Schedule</p>
            </div>
            <div className="iconDiv">
              <HiOutlineLocationMarker className="icon" />
              <p>Tag Location</p>
            </div>
          </div>
          <div className="btnDiv">
            <button className="measure"></button>
            <span></span>
            <button className="component">
              <FiPlus style={{ color: "blue" }} />
            </button>
            <button className="tweetBtn">Tweet</button>
          </div>
        </div>
      </div>

      {/* 
      <div className="tweetContainer">
       
       

        <div >
          
       
        </div>
      </div> */}
    </div>
  );
}

export default Tweet;
