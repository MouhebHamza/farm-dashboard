import React, { useState,useEffect } from "react"
import "./Cards.css"
import {
    
    UilWind,
    UilRaindrops,
    UilClouds,
    UilChart,
   
} from "@iconscout/react-unicons"

import Card from "../Card/Card";


const Cards = () =>
{
   
    
    const cardsData = [
        {
            title: "rainfall",
            color: {
                backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
                boxShadow: "0px 10px 20px 0px #e0c6f5"
            },
            value: "40%",
            png: UilRaindrops
        },

        {
            title: "wind speed",
            color: {
                backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
                boxShadow: "0px 10px 20px 0px #FDC0C7"
            },
            value: "10 km/h",
            png: UilWind
        },
        {
            title: "humidity",
            color: {
                backGround:
                    "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
                boxShadow: "0px 10px 20px 0px #F9D59B"
            },
            value: "40%",
            png: UilClouds
        }
    ]
    return (
            <div className='Cards'>
                {cardsData.map((card, id) => {
                    return (
                        <div className='parentContainer' key={id}>
                            <Card
                                title={card.title}
                                color={card.color}
                                value={card.value}
                                png={ card.png }
                                
                            />
                        </div>
                    )
                })}
            </div>
        )
};

export default Cards;
