import React from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../userDetailsContext';

export default class About extends React.Component {
    render() {
        return (
            <div>
                <div>Login Time: {this.context.loginTime}</div>
                <div>About</div>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                </ul>
            </div>
        );
    }
}

About.contextType = UserContext;