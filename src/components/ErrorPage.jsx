import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ErrorPage extends Component {
    render() {
        return (
            <div className='App error'>
                <h1>Entered password or user id is wrong</h1>
                if you want to create new account <Link to='/signup'>click here</Link>
                        <p>if you want to goback to signin <Link to='/'>click here</Link></p> 
                <div>  
                        <img src='https://cdncontribute.geeksforgeeks.org/wp-content/uploads/404.png'></img>
                        
                    </div>
            </div>
        );
    }
}

export default ErrorPage;