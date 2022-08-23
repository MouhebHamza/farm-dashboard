import React from 'react'
import StatsChart from "../../components/StatsChart/StatsChart"
import RightSide from "../../components/RightSide/RightSide"
import Sidebar from "../../components/Sidebar/Sidebar"
import "./Stats.css"
function Stats() {
    return (
        <>
            <Sidebar itemIndex="1"/>
            <div className='stats-container'>
                <StatsChart width='1000px' />
            </div>
            <RightSide />
        </>
    )
}

export default Stats