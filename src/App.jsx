import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import Calendar from "./pages/Calendar"
import Stats from "./pages/Stats"


function App() {
   
    return (
       
                        <Router>
                            <Routes>
                                <Route path='/' element={<Dashboard />} />
                                <Route path='/login' element={<LoginIndex />}>
                                    <Route index element={<Login />} />
                                </Route>
                                <Route
                                    path='/calendar'
                                    element={<Calendar />}
                                />
                                <Route path='/stats' element={<Stats />} />
                            </Routes>
                        </Router>
                    
    )
}

export default App
