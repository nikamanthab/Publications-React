import React from 'react';
import NavbarComponent from './../components/navbar';
import Search from './../components/search';
import Loading from './../components/loading';
import {Form,FormControl,Container,ToggleButton,ButtonToolbar,ToggleButtonGroup} from 'react-bootstrap';
import Pubcard from './../components/pubcard';
class Login extends React.Component{

    state = {
        loaded:0,
        pubs:[],
        recent:true
    }

    componentDidMount = ()=>{
        let records = [
            {
                title:"tictactoe with ml",
                author:"nitin",
                link:"https://github.com/nikamanthab"
            },
            {
                title:"grevience image processing",
                author:"nikamanth",
                link:"https://github.com/nikamanthab"
            },
            {
                title:"blockchain",
                author:"appiah",
                link:"https://github.com/nikamanthab"
            }
        ]

        this.setState({pubs:records});
    }

    render(){

        let s = this.state;
        let result = (
            <div>
                <NavbarComponent user={this.props.user}/>
                <br></br>
                <Container>
                <Search/>
                <br></br>
                <ButtonToolbar>
                    <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
                    <ToggleButton value={1}>Recent</ToggleButton>
                    <ToggleButton value={2}>Top 10 searched</ToggleButton>
                    </ToggleButtonGroup>
                </ButtonToolbar>
                    {
                        s.pubs.map((val,index)=>{
                            return(
                                <Pubcard
                                    title = {val.title}
                                    author = {val.author}
                                    link = {val.link}
                                    edit = {false}
                                    delete = {false}
                                />
                            )
                        })    
                    }
                </Container>
            </div>
        )

        return (
            result
        );
    }
}

export default Login;
