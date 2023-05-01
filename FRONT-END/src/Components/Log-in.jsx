import { useState } from "react"

export const LogInComponent = () => {
    const [userInput, setUserInput] = useState({
        email:"",
        password:""
    })

    const changeHandler = (e) => {
        const {name, value} = e.target;
        setUserInput({...userInput, [name]:value})
    }

    return (
        <div className="log-in-div">
            <form className="log-in-form">
                <h1>Login</h1>
                <p>Please sign in to continue</p>
                <input type="text" placeholder="Email" name="email" onChange={changeHandler} />
                <input type="password" placeholder="Password" name="password" onChange={changeHandler}/>
                <button>Login</button>
            </form>
            <div className="log-in-footer">
                <p>Dont have an account? <span>Sign up</span></p>
            </div>
        </div>
    )
}