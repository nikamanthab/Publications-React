import React from 'react';
import { Router, Link } from "@reach/router"
import Loginform from './../components/loginform';
import UserHome from './userhome';

class Login extends React.Component{
    state = {
        loggedin: false,
        cuser: "",
        cpass: "",
        username:""
    }

    componentDidMount = ()=>{
        this.setState({
            cuser:"admin",
            cpass:"admin"
        });

    }
    handleLoginButton = (user)=>{
        this.setState({
            loggedin:true,
            username:user
        });
    }

    render(){
        let result = undefined;
        let s = this.state;
        if(this.state.loggedin===false){
                result = (
                    <div>
                    <h1>User Login</h1>
                    <Loginform login={this.handleLoginButton} cuser={s.cuser} cpass={s.cpass}/>
                </div>
            );
        }  
        else{
            result = (
                <div>
                    <UserHome user={s.username}/>
                </div>
            )
        } 
        
        return (
            result
       );
    }
}

export default Login;
