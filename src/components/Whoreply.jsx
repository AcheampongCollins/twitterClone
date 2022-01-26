import React from "react";
import { GiWorld } from "react-icons/gi";
import { MdPeopleAlt } from "react-icons/md";
import { SiMaildotru } from "react-icons/si";
import "./Whoreply.scss";

function Whoreply() {
  return (
    <div className="replay">
      <div>
        <h3>Who can replay?</h3>
        <p>
          Choose who can reply to this Tweet. Anyone mentioned can always reply.
        </p>
      </div>
      <div>
        <div className="main-div">
          <div className="icon-div">
            <GiWorld className="icon" />
          </div>
          <h4>Everyone</h4>
        </div>
      </div>
      <div>
        <div className="main-div">
          <div className="icon-div">
            <MdPeopleAlt className="icon" />
          </div>
          <h4>People you follow</h4>
        </div>
      </div>
      <div>
        <div className="main-div">
          <div className="icon-div">
            <SiMaildotru className="icon" />
          </div>
          <h4>Only people you mention</h4>
        </div>
      </div>
    </div>
  );
}

export default Whoreply;
