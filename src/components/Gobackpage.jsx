import React, { Component } from 'react';
import navRout from './navRout';
import { Link } from 'react-router-dom';
class Gobackpage extends Component {
    render() {
        return (
            <div>
                <h3>Please go back to sign in page to login to your account
                    <Link to="/">click here</Link>
                </h3>
            </div>
        );
    }
}

export default navRout(Gobackpage);