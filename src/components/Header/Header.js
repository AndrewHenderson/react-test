import React, { Component } from 'react';
import NavLink from '../NavLink/NavLink'
import logo from '../../logo.svg';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React</h2>
        <ul role="nav" className="flex-row-start">
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </div>
    );
  }
}

export default Header;
