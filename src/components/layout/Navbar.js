import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const Navbar = ({ icon, title }) => {
return (
<nav className='navbar bg-primary'>   
    <h1>
    <i className={icon}/> {title}
    </h1>
    <ul>
        <li>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
        </li>
    </ul>
 </nav>
);
    
};

Navbar.defaultProps = {
    title: 'Github Finder',
    icon: 'fab fa-github'
}; 
// could do this instead of adding props to <navbar in App.js

Navbar.propTypes = {
    title:PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
};

export default Navbar
