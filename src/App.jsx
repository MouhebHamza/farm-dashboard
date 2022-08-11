import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
} from "react-router-dom"
import { useAuthContext } from "./hooks/useAuthContext"

import Calendar from "./pages/Calendar"
import Stats from "./pages/Stats"
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import Home from "./pages/Home"

function App ()
{
      const { user } = useAuthContext()

    return (
        <Router>
            
            <Routes>
                <Route
                    path='/calendar'
                    element={user ? <Calendar /> : <Navigate to='/login' />}
                />
                <Route
                    path='/stats'
                    element={user ? <Stats /> : <Navigate to='/login' />}
                />
                <Route
                    path='/'
                    element={user ? <Home /> : <Navigate to='/login' />}
                />
                <Route
                    path='/login'
                    element={!user ? <Login /> : <Navigate to='/' />}
                />
                <Route
                    path='/signup'
                    element={!user ? <Signup /> : <Navigate to='/' />}
                />
            </Routes>
        </Router>
    )
}

export default App
