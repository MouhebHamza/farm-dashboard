import { Link } from "react-router-dom"
import { useAuthContext } from "../hooks/useAuthContext"
import "../styles/topnav.css"
const Navbar = () => {
    const { user } = useAuthContext()
    return (
        <header>
            <div className='container'>
                <Link to='/'>
                    <h1>IQ Farm</h1>
                </Link>
                <nav>
                    {!user && (
                        <div>
                            <Link to='/login'>Login</Link>
                            <Link to='/signup'>Signup</Link>
                        </div>
                    )}
                </nav>
            </div>
        </header>
    )
}

export default Navbar
