import React from "react"
import MainDash from "../../components/MainDash/MainDash"
import RightSide from "../../components/RightSide/RightSide"
import Sidebar from "../../components/Sidebar/Sidebar"

const Home = () => {
    return (
        <>
            <Sidebar itemIndex="0" />
            <MainDash />
            <RightSide />
        </>
    )
}

export default Home
