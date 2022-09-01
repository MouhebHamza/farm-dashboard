import React from "react"
import MainDash from "../../components/MainDash/MainDash"
import RightSide from "../../components/RightSide/RightSide"
import Sidebar from "../../components/Sidebar/Sidebar"

const Home = () => {
    return (
        <>
            <Sidebar  />
            <MainDash />
            <RightSide />
        </>
    )
}

export default Home
