import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';

class Login extends React.Component{
    state={
        username: "admin",
        password: "admin"
    };

    handleChange = (event)=>{
        console.log(event.target.value);
        if(event.target.name === "user"){
            this.setState({username : event.target.value})
        }
        else if(event.target.name === "pass"){
            this.setState({password : event.target.value})
        }
    }
    
    handleLoginClick=()=>{
        let s = this.state;
        if(s.username === this.props.cuser && s.password === this.props.cpass){
            this.props.login(this.state.username);
        }
    }
    render(){
        return (
            <Container>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control name="user" onChange={this.handleChange} type="text" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name="pass" onChange={this.handleChange} type="password" placeholder="Password" />
                    </Form.Group>
                    <Button onClick={this.handleLoginClick} variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>
        );
    }
}

export default Login;
