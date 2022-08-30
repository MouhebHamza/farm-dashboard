import React ,{useState,useEffect} from 'react'
import "./ProductCard.scss"
import { getUserID, getToken } from "../../api/Device_api"
import axios from "axios"
import {ProductCardsData} from "../../Data/Data"
export default function ProductCard ()
{
    const [data, setData] = useState(null)
    useEffect(() => {
        const fetchPosts = async () => {
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
                    console.log(response)
                    setData(response["data"])
                })
                .catch(err => {
                    console.log(err)
                })
        }
        fetchPosts()
    }, [])
    if (data === null) return "Loading..."


    return (
        <div className='parentDiv'>
            {data.map((post) => {
                return (
                    <div className='card'>
                        <img
                            src={post.image.replace(
                                "http://localhost:9090",
                                "http://iqfarm.herokuapp.com"
                            )}
                            className='card__img'
                        />
                        <div className='card__body'>
                            <h2 className='card__title'>{post.title}</h2>
                            <p className='card__description'>{post.content}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
