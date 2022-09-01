import React, { useState ,useEffect} from 'react'
import "./ProfileForm.css"
import axios from "axios"
import UploadImage from "./UploadImage"
import { getUserID, getToken } from "../../api/Shared_api"

function ProfileForm ()
{
    const [phone, setPhone] = useState("")
    const [lastName, setLastName] = useState("")
    const [firstName, setFirstName] = useState( "" )
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
                        setData( response["data"] )
                        setPhone(response["data"]["phone"])
                        setFirstName(response["data"]["firstname"])
                        setLastName(response["data"]["lastname"])

                    })
                    .catch(err => {
                        console.log(err)
                    })
            }
        }
        fetchUserInfos()
    }, [])
     
const changeUserInfos = async () => {
    {
        const userId = getUserID()
        const token = getToken()
        axios({
            url: `http://iqfarm.herokuapp.com/users/${userId}`,
            method: "PUT",
            headers: {
                "x-access-token": token
            },
            data: {
                phone: phone,
                lastname: lastName,
                firstname: firstName
            }
        })
            .then(response => {
                console.log(response)
            })
            .catch(err => {
                console.log(err.response.data)
            })
    }
}
    

const handleSubmit = async e => {
    e.preventDefault()
    if ( data ) {
        
        changeUserInfos()
    }
//  setEmail("")
//  setFirstName("")
//  setLastName("")
    }


    if (!data ) return "loading .."
    return (
        <div className='formcont'>
            <UploadImage />
            <form className='formProfile' onSubmit={handleSubmit}>
                <h3>Edit Profile</h3>

                <label>first Name:</label>
                <input
                    type='text'
                    onChange={e => setFirstName(e.target.value)}
                    value={firstName}
                />
                <label>Last name:</label>

                <input
                    type='text'
                    onChange={e => setLastName(e.target.value)}
                    value={lastName}
                />
                <label>Phone Number :</label>
                <input
                    type='text'
                    onChange={e => setPhone(e.target.value)}
                    value={phone}
                />

                <button>Edit Profile</button>
            </form>
        </div>
    )
}

export default ProfileForm