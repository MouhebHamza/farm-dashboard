import React, { useState,useEffect } from "react"
import axios from "axios"
import "./Cards.css"
import {
    UilEstate,
    UilClipboardAlt,
    UilUsersAlt,
    UilPackage,
    UilChart,
    UilSignOutAlt,
    UilUsdSquare,
    UilMoneyWithdrawal
} from "@iconscout/react-unicons"

import Card from "../Card/Card";




const Cards = () =>
{
   const [data, setData] = useState(null)
   const [loading, setLoading] = useState(true)
   const [error, setError] = useState(null)
  
  // useEffect( () =>
  // {
  //     const getData = async () => {
  //         try {
  //             const response = await fetch(
  //                 "https://api.openweathermap.org/data/2.5/weather?lat=36.806496&lon=10.806496&appid=9b0ba7cbf80580ed938ae75144319d05"
  //             )
  //             if (!response.ok) {
  //                 throw new Error(
  //                     `This is an HTTP error: The status is ${response.status}`
  //                 )
  //             }
  //             let actualData = await response.json()
  //           setData( actualData )
  //           console.log(actualData)
  //             setError(null)
  //         } catch (err) {
  //             setError(err.message)
  //             setData(null)
  //         } finally {
  //             setLoading(false)
  //         }
  //     }
  //     getData()
  // }, [] )
//   useEffect(() => {
//       const getData = async () => {
//           try {
//               const response = await axios.get(
//                   "https://api.openweathermap.org/data/2.5/weather?lat=36.806496&lon=10.806496&appid=9eac82298c6782b841d7d64dcbe885f8",
                  
//               )
//               setData(response.data)
//               setError(null)
//           } catch (err) {
//               setError(err.message)
//               setData(null)
//           } finally {
//               setLoading(false)
//           }
//       }
//       getData()
//   }, [])

    const cardsData = [
        {
            title: "rainfall",
            color: {
                backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
                boxShadow: "0px 10px 20px 0px #e0c6f5"
            },
            value: "40%",
            png: UilUsdSquare
        },

        {
            title: "wind speed",
            color: {
                backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
                boxShadow: "0px 10px 20px 0px #FDC0C7"
            },
            value: "fdfdf",
            png: UilMoneyWithdrawal
        },
        {
            title: "humidity",
            color: {
                backGround:
                    "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
                boxShadow: "0px 10px 20px 0px #F9D59B"
            },
            value: "",
            png: UilClipboardAlt
        }
    ]
    // if (!data) return "loading..."
        return (
            <div className='Cards'>
                {cardsData.map((card, id) => {
                    return (
                        <div className='parentContainer' key={id}>
                            <Card
                                title={card.title}
                                color={card.color}
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
