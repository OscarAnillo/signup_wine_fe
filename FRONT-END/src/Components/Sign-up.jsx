import { useState } from "react"

export const SignUpComponent = () => {
    const [userSignUp, setUserSignUp] = useState({
        fullName:"",
        email:"",
        password:""
    })

    const changeHandler = (e) => {
        const {name, value} = e.target;
        setUserSignUp({...userSignUp, [name]: value})
    }

    return (
        <div className="sign-up-div">
            <form className="sign-up-form">
                <h1>Create Account</h1>
                <input type="text" placeholder="Full Name" name="fullName" onChange={changeHandler }/>
                <input type="text" placeholder="Email" name="email" onChange={changeHandler } />   
                <input type="password" placeholder="Password" name="password" onChange={changeHandler } />
                <button>Sign Up</button>
            </form>
            <div className="sign-up-footer">
                <p>Already have an account? <span>Sign in</span></p>
            </div>
        </div>
    )
}