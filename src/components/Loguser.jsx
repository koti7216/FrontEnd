import React, { Component } from 'react';
import navRout from './navRout';
import Uservice from '../Service/Uservice';

class Loguser extends Component {
    constructor(props){
        super(props);
        this.state={
            uid:this.props.useParams,
            uname:"",
            upassword:"",
            scode:""
        }
        this.logout=this.logout.bind(this);
        
    }
    componentDidMount(){
        console.log(this.state.uid.id)
        Uservice.getUser(this.state.uid.id).then((res)=>{
            
            this.setState({uname:res.data.uname, upassword:res.data.upassword, scode:res.data.scode})
        });
        console.log(this.state.uname);
    }
    logout(e){
        e.preventDefault();
        this.props.useNav("/")
    }
    
    render() {
        return (
            <div>
                <h1>Welcome to code Storage</h1>
                <div>
                    <p>Hiii... {this.state.uname}</p>
                    <p> your Secret code is {this.state.scode}</p>
                </div>
                <div className='bottom'>
                    <button className='btn btn-primary' onClick={this.logout}>Logout</button>
                </div>
            </div>
        );
    }
}

export default navRout(Loguser);