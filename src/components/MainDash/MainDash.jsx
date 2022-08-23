import React,{useEffect,useState} from "react";
import Cards from "../Cards/Cards";
import StatsChart from "../StatsChart/StatsChart"
import IncestsCards from "../InsectsCard/IncestsCards"

import "./MainDash.css";
const MainDash = () =>
{

    //   function  usertoken () {
    //     const [myLocalStorageData, setMyLocalStorageData] = useState({})
    //     useEffect(() => {
    //         const data = localStorage.getItem("user")
    //         setMyLocalStorageData(JSON.parse(data))
    //     }, [])
    //     return myLocalStorageData
    // }
    // const userrr = usertoken()
    // console.log("userrr", userrr)
    
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
