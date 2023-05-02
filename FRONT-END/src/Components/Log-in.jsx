import { useState } from "react"
import axios from 'axios';
import PropTypes from 'prop-types';

export const LogInComponent = ({ setSubmitted }) => {
    const [userInput, setUserInput] = useState({
        email:"",
        password:""
    })

    const changeHandler = (e) => {
        const {name, value} = e.target;
        setUserInput({...userInput, [name]:value})
    }

    const submitHandler = (e) => {
        e.preventDefault();
        if(!userInput.email || !userInput.password){
            alert('Please provide an email or password!');
            return;
        }
        axios.post("http://localhost:3005/api/auth/login", {
          email: userInput.email,
          password: userInput.password  
        })
        .then((res) => {
            setSubmitted(true)
            console.log(res.data);
        })
        .catch((err)  => {
            alert("User not found!")
            console.log(err)
        });
    }

    return (
        <div className="log-in-div"> 
            <form className="log-in-form" onSubmit={submitHandler}>
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

LogInComponent.propTypes = {
    setSubmitted: PropTypes.func.isRequired
}