import { Routes, Route, Navigate } from "react-router-dom"
import { useAuthContext } from "./hooks/useAuthContext"

import Stats from "./pages/Stats/Stats"
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import Home from "./pages/Home/Home"
import Profile from "./pages/Profile/Profile"
import Devices from "./pages/Devices/Devices"
import Products from "./pages/Products/Products"
import "./App.css"

function App ()
{
      const { user } = useAuthContext()

    return (
        <div className='App'>
            <div className='AppGlass'>
                <Routes>
                    <Route
                        path='/'
                        element={user ? <Home /> : <Navigate to='/login' />}
                    />
                    
                    <Route
                        path='/devices'
                        element={user ? <Devices /> : <Navigate to='/login' />}
                    />
                    <Route
                        path='/products'
                        element={user ? <Products /> : <Navigate to='/login' />}
                    />
                    <Route path='/stats' element={<Stats />} />
                    <Route path='/profile' element={<Profile />} />

                    <Route
                        path='/login'
                        element={!user ? <Login /> : <Navigate to='/' />}
                    />
                    <Route
                        path='/signup'
                        element={!user ? <Signup /> : <Navigate to='/' />}
                    />
                </Routes>
            </div>
        </div>
    )
}

export default App
