import React, { useState, useEffect } from "react"
import { IconButton, Avatar } from "@mui/material"
import { getUserID, getToken } from "../../api/Shared_api"
import axios from "axios"
import './UploadImage.css'
const UploadAndDisplayImage = () => {
    const [file, setFile] = useState(null)
  const [image, setImage] = useState({ preview: "", data: "" })

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
                        setFile(response["data"]["image"])
                        setImage(response["data"]["image"])
                    })
                    .catch(err => {
                        console.log(err)
                    })
            }
        }
        fetchUserInfos()
    }, [])

    const [status, setStatus] = useState("")

    

    const handleFileChange = e => {
        const img = {
            preview: URL.createObjectURL(e.target.files[0]),
            data: e.target.files[0]
        }
        setImage( img )
        setFile(image.preview)
        console.log( img )
                console.log(file)

    }

       const handleChange = function loadFile(event) {
           if (event.target.files.length > 0) {
               const file = URL.createObjectURL(event.target.files[0])
               setFile( file )
               const img = {
                   preview: URL.createObjectURL(event.target.files[0]),
                   data: event.target.files[0]
               }
               setImage(img)

           }
                   console.log(event.target.files[0])

    }
    const handleSubmit = async e => {
        e.preventDefault()
        const userId = getUserID()
        let formData = new FormData()
        formData.append("file", image.data)
        
        const response = await fetch(
            `https://iqfarm.herokuapp.com/users/uploadimage/${userId}`,
            {
                method: "POST",
                body: formData
            }
        )
            .then(response => {
                console.log(response)
                
            })
            .catch(err => {
                console.log(err)
            })
    }





    //     const handleClick = e =>
    //     {
    //             e.preventDefault()

    //             changeUserImage()

    //     }

    if (!data) return "loading .."
    return (
        <div>
            <input
                type='file'
                onChange={handleChange}
                id='upload'
                accept='image/*'
                style={{ display: "none" }}
            />
            <label htmlFor='upload'>
                <IconButton
                    color='primary'
                    aria-label='upload picture'
                    component='span'>
                    <Avatar
                        id='avatar'
                        src={file}
                        style={{
                            width: "150px",
                            height: "150px"
                        }}
                    />
                </IconButton>
            </label>
            <label htmlFor='avatar' />
            <button className="btn"onClick={handleSubmit}>Confirm </button>
        </div>
    )
}

export default UploadAndDisplayImage
