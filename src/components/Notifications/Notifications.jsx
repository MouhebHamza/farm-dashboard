import React from "react"
import "./Notifications.css"
import { NotificationsData } from "../../Data/Data"

const Notifications = () => {
    return (
        <div className='Updates'>
            {NotificationsData.map(notification => {
                return (
                    <div className='update'>
                        <div className='noti'>
                            <div style={{ marginBottom: "0.5rem" }}>
                                <span>{notification.name}</span>
                                <span> {notification.noti}</span>
                            </div>
                            <span>{notification.time}</span>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Notifications
