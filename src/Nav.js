import React, { Component } from 'react';
import logo from './logo.png';

class Nav extends Component {
    render() {
        return (
            <div className='Nav'>
                <nav className="navbar" role="navigation" aria-label="main navigation">
                    <div className="navbar-brand">
                        <a className="navbar-item" href="/">
                            <img src={ logo } className="navbar-brand" alt="Holo"></img>
                        </a>

                        <a href="/" role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        </a>
                    </div>

                    <div className="navbar-menu">
                        <div className="navbar-start">
                            <input class="input nav-search" type="text" placeholder="Search for products..." />
                        </div>
                        <div className="navbar-end">
                            <div className="navbar-item is-hoverable">
                                <a href="/" className="navbar-item">
                                    Profile
                                </a>

                                <div className="navbar-dropdown">
                                <a href="/" className="navbar-item">
                                    About
                                </a>
                                <a href="/" className="navbar-item">
                                    Jobs
                                </a>
                                <a href="/" className="navbar-item">
                                    Contact
                                </a>
                                <hr className="navbar-divider" />
                                    <a href="/" className="navbar-item">
                                    Report an issue
                                </a>
                                </div>
                            </div>

                            <div className="navbar-item">
                                <i className='fas fa-basket-shopping'></i>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        );
    };
};


export default Nav;