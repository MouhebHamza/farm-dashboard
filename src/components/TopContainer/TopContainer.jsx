import React, { useEffect } from "react"
import { BiSearchAlt } from "react-icons/bi"
import { FaBell, FaChevronDown } from "react-icons/fa"
import img from "../../imgs/img1.png"
import './TopContainer.css'
function TopContainer() {
    useEffect(() => {
        const mouseTarget = document.getElementById("menuChevron")
        const menuContainer = document.getElementById("menuContainer")
        mouseTarget.addEventListener("mouseenter", () => {
            mouseTarget.style.transform = "rotate(180deg)"
            menuContainer.style.transform = "translateX(0px)"
        })

        menuContainer.addEventListener("mouseleave", () => {
            mouseTarget.style.transform = "rotate(0deg)"
            menuContainer.style.transform = "translateX(300px)"
        })
    }, [])

    return (
        <div className='topContainer'>
           

            <div className='profileContainer'>
                <i className='profileIcon'>
                    <FaBell />
                </i>
                <div className='profileImage'>
                    <img src={img} alt='' />
                </div>
                <p className='profileName'>Olivia Christine</p>
                <i className='menuChevron' id='menuChevron'>
                    <FaChevronDown />
                </i>

                <div className='menuContainer' id='menuContainer'>
                    <ul>
                        <li>Edit Profile</li>
                        <li>My devices</li>
                        <li>Logout</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default TopContainer
