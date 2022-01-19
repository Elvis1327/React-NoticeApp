import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaCanadianMapleLeaf } from 'react-icons/fa';
import { FiMenu } from 'react-icons/fi';
import { AiOutlineClose } from 'react-icons/ai';

export const Navbar = () => {

    const [ toggle, setToggle ] = useState(false);

    const navbarToggleResponsie = () => {
        setToggle(!toggle);
    }

    return (
        <header className="_main-navbar-container">
            <Link className="_redirect-to-home-page" to="/">
                New York Time
            </Link>
            <div className="buttons-responsive-container">
                <Link className="_navbar-icon-responsive" to="/">
                    <FaCanadianMapleLeaf fontSize='30px' />
                </Link>
                <button onClick={navbarToggleResponsie} className="_button-responsive">
                    { toggle ? <AiOutlineClose /> : <FiMenu />}
                </button>
            </div>
            <nav className="_navbar-header">
                <ul className={toggle ? '_ul-header active' : '_ul-header'}>
                    <li className="_li-header" onClick={() => navbarToggleResponsie(false)}>
                        <Link className="links" to="/apple">Tecnology</Link>
                    </li>
                    <li className="_li-header" onClick={() => navbarToggleResponsie(false)}>
                        <Link className="links" to="/tesla">Tesla</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};



