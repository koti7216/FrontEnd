import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ErrorPage extends Component {
    render() {
        return (
            <div>
                <h1>Entered password or user id is wrong</h1>
                <div>
                        if you want to create new account <Link to='/signup'>click here</Link> 
                    </div>
            </div>
        );
    }
}

export default ErrorPage;