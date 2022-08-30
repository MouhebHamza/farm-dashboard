import React from "react"
import ProfileForm from "../../components/ProfileForm/ProfileForm"
import RightSide from "../../components/RightSide/RightSide"
import Sidebar from "../../components/Sidebar/Sidebar"

function Profile() {
    return (
        <>
            <Sidebar />
            <ProfileForm />
            <RightSide />
        </>
    )
}

export default Profile
