import React from 'react';
import { Router, Link } from "@reach/router"
import Loginform from './../components/loginform';
import Pubcard from './../components/pubcard';
import Search from './../components/search'
import {Container} from 'react-bootstrap';
class Login extends React.Component{

    state = {
        pubs : []
    }

    componentDidMount = ()=>{
        let records = [
            {
                pubno:1,
                title:"tictactoe with ml",
                author:"nitin",
                link:"https://github.com/nikamanthab"
            },
            {
                pubno:2,
                title:"grevience image processing",
                author:"nikamanth",
                link:"https://github.com/nikamanthab"
            },
            {
                pubno:3,
                title:"blockchain",
                author:"appiah",
                link:"https://github.com/nikamanthab"
            }
        ]

        this.setState({pubs:records});
    }

    render(){
        let s = this.state;
        return (
            <Container>
                <br></br>
                <Search/>
                <br></br>

                {
                        s.pubs.map((val,index)=>{
                            return(
                                <Pubcard
                                    no = {val.pubno}
                                    title = {val.title}
                                    author = {val.author}
                                    link = {val.link}
                                    edit = {true}
                                    delete = {true}
                                />
                            )
                        })    
                    }
            </Container>
        );
    }
}

export default Login;
