import React from 'react';

const Header = () => {
    return (
        <div className="header">
            <div className="container">
                <div className="headerTop">
                    <div className="logo">
                        <img src="./assets/logo.png" alt="Logo" className="logoImg"/>
                        Agency
                    </div>
                    <nav className="navigation">
                        <a href="" className="navlink">About</a>
                        <a href="" className="navlink">Services</a>
                        <a href="" className="navlink">Pricing</a>
                        <a href="" className="navlink">Blog</a>
                    </nav>
                    <button className="headerButton">
                        contact
                    </button>
                </div>
                <div className="headerBody">
                    <div className="headerTitle">Portfolio</div>
                    <div className="headerSubtitle">Agency provides a full service range including technical skills,
                        design, business understanding.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;