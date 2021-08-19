import React from 'react';
import {useHistory} from'react-router-dom'
import './Login.css'



class Login extends React.Component{
   
    state={
        email:'',
        pwd:''
    }


    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({[name]:value})
    }

    handleSubmit = (e) => {
        e.preventDefault()

    }
    

    render(){

    function HomeButton() {
        let history = useHistory();

        const handleHistory = () => {
            history.push("/sports")
          
          }
    }    

    

        return(
        <div>
            <div> 
            <button onClick={handleHistory}>back</button>
            </div>
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type='email' name="email" placeholder= "Email..." required onChange={this.handleChange}/>
                    <input type="password" name="pwd" placeholder="Password..." required onChange={this.handleChange}/>
                    <button onSubmit={this.handleSubmit}>Log In</button>
                </form>
            </div>
        </div>
        )
    }
}

export default Login;