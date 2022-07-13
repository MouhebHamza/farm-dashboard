import { useState } from "react"
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import Login from "./pages/Login"

function App() {
    return (
            <Router>
                <Routes>
                    <Route exact path='/' element={<Dashboard />} />
                    <Route path='/login' element={<Login />} />
                </Routes>
            </Router>
    )
}

export default App
