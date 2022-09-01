import React, { useState, useEffect } from "react"
import axios from "axios"
export function getUserID() {
    const LocalStorageData = localStorage.getItem("user")
    const data = JSON.parse(LocalStorageData)
    const id = data["data"]["user"]["_id"]
    if (!data) return null
    return id
}
export function getToken() {
    const LocalStorageData = localStorage.getItem("user")
    const data = JSON.parse(LocalStorageData)
    const token = data["data"]["token"]
    if (!data) return null
    return token
}

export  function fetchUserDevices ()
{
    const userId = getUserID()
    const token = getToken()
    axios({
        url: `http://iqfarm.herokuapp.com/devices/user/${userId}`,
        method: "get",
        headers: {
            "x-access-token": token
        }
    })
        .then(response => {
            console.log( response )

        })
        .catch(err => {
            console.log(err)
        } )
}


export function fetchPosts() {
    const userId = getUserID()
    const token = getToken()
    axios({
        url: `http://iqfarm.herokuapp.com/posts/`,
        method: "get",
        headers: {
            "x-access-token": token
        }
    })
        .then(response => {
            console.log("dddd"+response)
        })
        .catch(err => {
            console.log(err)
        })
}
