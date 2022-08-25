import React from 'react'
import StatsChart from "../../components/StatsChart/StatsChart"
import RightSide from "../../components/RightSide/RightSide"
import Sidebar from "../../components/Sidebar/Sidebar"
import "./Stats.css"
function Stats ()
{
    
    const windowWidth = window.innerWidth
    let width 
    if ( windowWidth <= 768 ) {
         width=windowWidth - 60
     }
    else {
         width= windowWidth/2  
    }
    return (
        <>
            <Sidebar itemIndex="1"/>
            <div className='stats-container'>
                <StatsChart width={width} />
            </div>
            <RightSide />
        </>
    )
}

export default Stats