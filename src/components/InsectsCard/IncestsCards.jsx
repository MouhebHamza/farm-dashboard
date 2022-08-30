import React from "react"
import { IncestData } from "../../Data/Data"
import "./IncestsCards.css"
import IncestCard from "./IncestCard"

const IncestsCards = () => {
    return (
        <div className='Cards'>
            {IncestData.map((card, id) => {
                return (
                    <div className='parentContainer' key={id}>
                        <IncestCard text={card.text} number={card.number} />
                    </div>
                )
            })}
        </div>
    )
}

export default IncestsCards
