import React,{useEffect,useState} from "react";
import Cards from "../Cards/Cards";
import StatsChart from "../StatsChart/StatsChart"
import IncestsCards from "../InsectsCard/IncestsCards"

import "./MainDash.css";
const MainDash = () =>
{

  return (
      <div className='MainDash'>
          <h1>Dashboard</h1>
          <div className='top-tier'>
              <StatsChart width='500px' />
              <IncestsCards />
          </div>

          <Cards />
      </div>
  )
};

export default MainDash;
