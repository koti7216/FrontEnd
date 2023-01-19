import React, { Component } from 'react';

class ErrorPage extends Component {
    render() {
        return (
            <div>
                <h1>Entered password or user id is wrong</h1>
                <div>
                        if you want to create new account <a href='http://localhost:3000/signup'>click here</a> 
                    </div>
            </div>
        );
    }
}

export default ErrorPage;