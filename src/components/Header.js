import React from 'react';
import headerLogo from '../images/logo.svg';

function Header() {
    return (
        <header className="header">
            <img className="header__logo" src={headerLogo} alt="логотип сайта" />
        </header>
    )
}

export default Header;