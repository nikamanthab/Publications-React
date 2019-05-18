import React from 'react';
import { Router, Link } from "@reach/router"
import Loginform from './../components/loginform';
import AdminHome from './adminhome';

class Login extends React.Component{
    state = {
        loggedin: false
    }

    handleLoggin = ()=>{
        this.setState({loggedin:true});
    }

    render(){
        let result = undefined;
        if(this.state.loggedin===false){
            result = (
                <div>
                    <h1>Admin Login</h1>
                    <Loginform cuser={"admin"} cpass={"admin"} login={this.handleLoggin}/>
                </div>
            );
        }  
        else{
            result = (
                <div>
                    <AdminHome/>
                </div>
            )
        } 
        
        return (
            result
       );
    }
}

export default Login;
