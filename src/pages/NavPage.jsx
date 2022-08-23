import React from 'react'
import { Routes, Route, Navigate } from "react-router-dom"
import Home from "./Home"
import Blank from "./Blank"

function NavPage() {
    return (
        <Routes>
            <Route path='/homep' element={<Home />} />
            <Route path='/customers' element={<Blank />} />
            <Route path='/settings' element={<Blank />} />
            <Route path='/stats' element={<Blank />} />
        </Routes>
    )
}

export default NavPage