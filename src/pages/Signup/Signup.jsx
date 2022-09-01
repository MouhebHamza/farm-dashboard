import { useState } from "react"
import Navbar from "../../components/Navbar/Navbar"
import { useSignup } from "../../hooks/useSignup"
import "../../styles/Login.css"
import "../../styles/topnav.css"

const Signup = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [firstname, setFirstName] = useState("")
    const [lastname, setLastName] = useState("")

    const { signup, error, isLoading } = useSignup()

    const handleSubmit = async e => {
        e.preventDefault()

        await signup(firstname,lastname,email, password)
    }

    return (
        <div className="cont">
            <Navbar/>
            <form className='signup' onSubmit={handleSubmit}>
                <h3>Sign Up</h3>

                <label>Email address:</label>
                <input
                    type='email'
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                />
                <label>firstname:</label>
                <input
                    type='text'
                    onChange={e => setFirstName(e.target.value)}
                    value={firstname}
                />
                <label>lastname:</label>
                <input
                    type='text'
                    onChange={e => setLastName(e.target.value)}
                    value={lastname}
                />
                <label>Password:</label>
                <input
                    type='password'
                    onChange={e => setPassword(e.target.value)}
                    value={password}
                />

                <button disabled={isLoading}>Sign up</button>
                {error && <div className='error'>{error}</div>}
            </form>
        </div>
    )
}

export default Signup
