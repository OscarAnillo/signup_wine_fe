import { useState } from "react";
import axios from 'axios';

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

    const submitHandler = (e) => {
        e.preventDefault();
        if(!userSignUp.fullName || !userSignUp.email || !userSignUp.password){
            alert('Please provide your name, email and password!');
            return;
        }
        axios.post("http://localhost:3005/api/auth/register", {
            fullName: userSignUp.fullName,
            email: userSignUp.email,
            password: userSignUp.password
        }).then((res) => {
            setUserSignUp({
                fullName:"",
                email:"",
                password:""
            })
            alert("Your account has been successfully created!")
            console.log(res.data)

        }).catch(console.log)
    }

    return (
        <div className="sign-up-div">
            <form className="sign-up-form" onSubmit={submitHandler}>
                <h1>Create Account</h1>
                <input type="text" placeholder="Full Name" name="fullName" value={userSignUp.fullName} onChange={changeHandler }/>
                <input type="text" placeholder="Email" name="email" value={userSignUp.email} onChange={changeHandler } />   
                <input type="password" placeholder="Password" name="password" value={userSignUp.password} onChange={changeHandler } />
                <button>Sign Up</button>
            </form>
            <div className="sign-up-footer">
                <p>Already have an account? <span>Sign in</span></p>
            </div>
        </div>
    )
}