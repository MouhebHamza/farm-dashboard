import React from 'react'
import "./ProductCard.scss"

import {ProductCardsData} from "../../Data/Data"
export default function ProductCard ()
{
    

    return (
        <div className='parentDiv'>
            {ProductCardsData.map((card, id) => {
                return (
                    <div className='card'>
                        <img src={card.img} className='card__img' />
                        <div className='card__body'>
                            <h2 className='card__title'>{card.title}</h2>
                            <p className='card__description'>
                                {card.description}
                            </p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
