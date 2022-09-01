import React from "react"
import RightSide from "../../components/RightSide/RightSide"
import Sidebar from "../../components/Sidebar/Sidebar"
import "./Products.css"
import ProductCard from "../../components/ProductCard/ProductCard"


function Products ()
{
    
    return (
        <>
            <Sidebar />
            <div className='products-container'>
                <h1>Our products</h1>
                <div className='stats-container'>
                    <ProductCard />
                </div>
            </div>
            <RightSide />
        </>
    )
}

export default Products
