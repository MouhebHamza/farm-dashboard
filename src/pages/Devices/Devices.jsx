import React from "react"
import Table from "../../components/Table/Table"
import RightSide from "../../components/RightSide/RightSide"
import Sidebar from "../../components/Sidebar/Sidebar"
import "./Devices.css"
function Devices() {
    return (
        
         <>
         
        <Sidebar itemIndex="1"/>
            <div className='table-devices'>
                <Table />
        </div>
            <RightSide />
         </>   
    )
}

export default Devices
