import React, { Component } from 'react';
import navRout from './navRout';
import Uservice from '../Service/Uservice';


class Loguser extends Component {
    constructor(props){
        super(props);
        this.state={
            uname:"",
            upassword:"",
            scode:"",
            sigm:true
        }
        this.logout=this.logout.bind(this);
        
    }
   componentDidMount(){
        Uservice.getUser(this.props.location.state.id).then((res)=>{
            
            this.setState({uname:res.data.uname, upassword:res.data.upassword, scode:res.data.scode})
        });
        console.log(this.state.uname);
    }
    logout(e){
        e.preventDefault();
        Uservice.logoutus().then((res)=>{
            this.setState({sigm:false});
            localStorage.clear();
            this.props.useNav(res.data,{replace:true})})
    }
    
    render() {
        return (
            <div>
            {this.state.sigm && <div>
                <h1>Welcome to code Storage</h1>
                <div>
                    <p>Hiii... {this.state.uname}</p>
                    <p> your Secret code is {this.state.scode}</p>
                    <h2><a href="http://localhost:3001">For Employe management click here</a></h2>
                </div>
                <div className='bottom'>
                    <button className='btn btn-primary' onClick={this.logout}>Logout</button>
                </div>
            </div>}
            </div>
        );
    }
}

export default navRout(Loguser);