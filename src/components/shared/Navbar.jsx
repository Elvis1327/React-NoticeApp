import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <header className="_main-navbar-container">
            <Link className="_redirect-to-home-page" to="/">
                New York Time
            </Link>
            <nav className="_navar-header">
                <ul className="_ul-header">
                    <li className="_li-header">
                        <Link className="links" to="/apple">Tecnology</Link>
                    </li>
                    <li className="_li-header">
                        <Link className="links" to="/tesla">Tesla</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;


