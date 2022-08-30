import React from "react"
import "./IncestsCard.css"

const IncestCard = props => {
    return (
        <div className='Updates'>
            <div className='incest'>
                <h2>{props.text}</h2>

                <div className='detail'>
                    <div style={{ marginBottom: "1rem" }}>
                        <h1> {props.number}</h1>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default IncestCard
