import React from "react";
import Notifications from "../Notifications/Notifications"
import "./RightSide.css";
import TopContainer from "../TopContainer/TopContainer"

const RightSide = () => {
  return (
    <div className='RightSide'>
      <TopContainer/>
          <div>
              <h3>Notifications</h3>
              <Notifications />
          </div>
          
      </div>
  )
};

export default RightSide;
