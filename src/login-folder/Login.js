import React, { useState } from 'react';
import {useHistory} from'react-router-dom'
import './Login.css'



const Login = () => {
   const [state, setState] = useState(
    {
        email:'',
        pwd:''
    }
   );
    

    const handleChange = (e) => {
        const {name, value} = e.target
        setState({[name]:value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()

    }
   
    const history = useHistory();

    const handleHistory = () => {
      history.push("/sports")
    
    }
        return(
        <div>
            <div> 
            <button onClick={handleHistory}>back</button>
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <input type='email' name="email" placeholder= "Email..." required  value={state.email} onChange={handleChange}/>
                    <input type="password" name="pwd" placeholder="Password..." required value={state.pwd} onChange={handleChange}/>
                    <button onSubmit={handleSubmit}>Log In</button>
                </form>
            </div>
        </div>
        )

}


export default Login;