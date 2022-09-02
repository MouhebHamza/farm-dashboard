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
    const [humidity, setHumidity] = useState(null)	  
    const [wind, setWind] = useState(null)	  
    const [temp, setTemp] = useState(null)	  
    const [data, setData] = useState(null)	  
   const [loading, setLoading] = useState(true)	  
   const [error, setError] = useState(null)
   
    useEffect( () =>{	  
        const getData = async () => {	 
            try {	 
                const response = await fetch(
                    "https://api.openweathermap.org/data/2.5/weather?lat=36.806496&lon=10.806496&appid=9b0ba7cbf80580ed938ae75144319d05&units=metric"
                )	  
                if (!response.ok) {	 
                    throw new Error(	  
                        `This is an HTTP error: The status is ${response.status}`	  
                    )	  
                }	 
                let actualData = await response.json()	            
                setData( actualData )	 
                setHumidity(actualData["main"]["humidity"])
                setWind(actualData["wind"]["speed"])
                setTemp(actualData["main"]["temp"])

                setError(null)	              
            } catch (err) {	 
                setError(err.message)	 
                setData(null)	  
            } finally {	  
                setLoading(false)	 
            }	 
        }	 
        getData()	  
    }, [] )
    
        const cardsData = [
            {
                title: "Temperature",
                color: {
                    backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
                    boxShadow: "0px 10px 20px 0px #e0c6f5"
                },
                value: `${temp}°C`,
                png: UilRaindrops
            },

            {
                title: "wind speed",
                color: {
                    backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
                    boxShadow: "0px 10px 20px 0px #FDC0C7"
                },
                value: `${wind} km/h`,
                png: UilWind
            },
            {
                title: "humidity",
                color: {
                    backGround:
                        "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
                    boxShadow: "0px 10px 20px 0px #F9D59B"
                },
                value: `${humidity} %`,
                png: UilClouds
            }
        ]
    
      
            if (!data) return "Loading..."
                return ( 
                    <div className='Cards'
                    > 
                        {cardsData.map((card, id) => {
                            return (
                                <div className='parentContainer' key={id}>
                                    <Card   
                                        title={card.title}
                                        color={ card.color } 
                                    
                                        value={card.value}
                                        png={card.png}
                                    />
                                </div> 
                            )
                        })}
                    </div>  
                )
};

export default Cards;
