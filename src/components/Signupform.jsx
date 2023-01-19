import React, { Component } from 'react';
import navRout from './navRout';
import Uservice from '../Service/Uservice';
class Signupform extends Component {
    constructor(props){
        super(props);
        this.state={
            uname:"",
            upassword:"",
            scode:``,
            errormessage:""
        }
        this.changeuname=this.changeuname.bind(this);
        this.changeupassword=this.changeupassword.bind(this);
        this.changescode=this.changescode.bind(this);
        this.saveuser=this.saveuser.bind(this);
    }
    changeuname(event){
        this.setState({uname:event.target.value});
    }
    changeupassword(event){
        this.setState({upassword:event.target.value});
    }
    changescode(event){
        this.setState({scode:event.target.value});
    }
    saveuser(e){
        e.preventDefault();
        let user={uname:this.state.uname, upassword:this.state.upassword, scode:this.state.scode};
        if(user.uname !==""&&user.upassword!==""&&user.scode!==``){
        Uservice.sUpUser(user).then((res)=>{
            this.props.useNav("/goback")
        })}
        else{
            this.setState({errormessage:"there is an error"})
        }
    }
    render() {
        return (
            <div>
                <div className='header'>
                     <h1>Create your account</h1>
                </div>
                <div className='card'>
                    <h2 className='card-title'>Fill Details to Sign-Up</h2>
                    <div className='card-body'>
                        <form>
                            <div className='form-group'>
                                <label>User Id</label><br/>
                                <input placeholder='user id' name='uname' className='form-control' 
                                  value={this.state.uname} onChange={this.changeuname}/>
                            </div><br/>
                            <div className='form-group'>
                                <label>Password</label><br/>
                                <input placeholder='password' type="password" name='upassword' className='form-control' 
                                  value={this.state.upassword} onChange={this.changeupassword}/>
                            </div><br/>
                            <div className='form-group'>
                                <label>Secret Code</label><br/>
                                <input placeholder='code' name='scode' className='form-control' 
                                  value={this.state.scode} onChange={this.changescode}/>
                            </div><br/>
                        </form>
                        <button className='btn btn-primary' onClick={this.saveuser}>Create Account</button><br/>
                        <div>
                            <h4>Instructions:</h4>
                            <p>if you try to create account with any empty boxes, you will redirect to same page</p>
                        </div>
                        <div className='App error'>
                            <p>{this.state.errormessage}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default navRout(Signupform);