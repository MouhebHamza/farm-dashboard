import React, { useEffect, useState } from "react"
import { FaBell, FaChevronDown } from "react-icons/fa"
import "./TopContainer.css"
import axios from "axios"
import { getUserID, getToken } from "../../api/Shared_api"
import { useNavigate } from "react-router-dom"
import { useLogout } from "../../hooks/useLogout"

function TopContainer() {
    const { logout } = useLogout()
    let navigate = useNavigate()
    
const [data, setData] = useState(null)
useEffect(() => {
    const fetchUserInfos = async () => {
        {
            const userId = getUserID()
            const token = getToken()
            axios({
                url: `http://iqfarm.herokuapp.com/users/${userId}`,
                method: "get",
                headers: {
                    "x-access-token": token
                }
            })
                .then(response => {
                    console.log(response)
                    setData(response["data"])
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }
    fetchUserInfos()
}, [])

    
    
        
   
if (data === null) return "Loading..."

    return (
        <div className='topContainer'>
            <div className='profileContainer'>
                <i className='profileIcon'>
                    <FaBell />
                </i>
                <div className='profileImage'>
                    <img src={data["image"]} alt='' />
                </div>
                <p className='profileName'>welcome {data["firstname"]}</p>
                <i className='menuChevron' id='menuChevron'>
                    <FaChevronDown />
                </i>

                <div className='menuContainer' id='menuContainer'>
                    <ul>
                        <li >Edit Profile</li>
                        <li >My devices</li>
                        <li
                          >
                            Logout
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default TopContainer
