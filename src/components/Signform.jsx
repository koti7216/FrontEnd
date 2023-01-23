import React, { Component } from 'react';
import Uservice from '../Service/Uservice';
import navRout from './navRout';

class Signform extends Component {
    constructor(props){
        super(props)
        this.state={
            uname:"",
            upassword:"",
        }
        this.changeuname=this.changeuname.bind(this)
        this.testuser=this.testuser.bind(this)
        this.changeupassword=this.changeupassword.bind(this);
        this.signup=this.signup.bind(this);
    }
    changeuname(event){
        this.setState({uname:event.target.value})
    }
    changeupassword(event){
        this.setState({upassword:event.target.value});
    }
    testuser(e){
        e.preventDefault();
        let user={uname:this.state.uname, upassword:this.state.upassword}
        console.log(user);
       Uservice.sInUser(user).then((res)=>{
        if(res.data===""){
               this.props.useNav("/error")
            }
            else{
                let id=parseInt(res.data.uId);
                this.props.useNav('/log',{state:{id:id}})                
            }

        })
                
    }
    signup(e){
        e.preventDefault();
        this.props.useNav("/signup")

    }
    render() {
        return (
            <div className='border border-5'>
                <div className='header'>
                    <h1>Welcome to code Storage</h1>
                </div>

                <div className='card'>
                    <h2 className='card-title'>Sign In</h2>
                    <div className='card-body'>
                       <form>
                        <div className='form-group'>
                           <label>User Id</label><br/><br/>
                           <input placeholder="user id" name="uname" className="form-control" 
                               value={this.state.uname} onChange={this.changeuname}/><br/>
                        </div>  <br/>
                        <div className='form-group'>
                           <label>Password</label><br/><br/>
                           <input  placeholder="Password" name="upassword" className="form-control" 
                               value={this.state.upassword} onChange={this.changeupassword}/>
                        </div> <br/>
                        <button onClick={this.testuser} className="btn btn-primary">Sign-In</button>
                       </form>
                    </div>
                    <div>
                        <h3>To Create your account</h3>
                        <button onClick={this.signup}>Sign-Up</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default navRout(Signform);