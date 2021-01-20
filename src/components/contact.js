import React from 'react';
import { Link } from 'react-router-dom';

export default class Contact extends React.Component {
    render() {
        return (
            <div>
                <div>Contact</div>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                </ul>
            </div>
        );
    }
}