import React from 'react'


export interface HeaderProps {

}

const Header: React.SFC<HeaderProps> = () => {
    return (
        <div className="hero-head">
            <nav className="navbar">
                <div className="container">
                    <div className="navbar-brand">
                        <a className="navbar-item" href="../">
                            <img src="http://bulma.io/images/bulma-type-white.png" alt="Logo"/>
                        </a>
                        <span className="navbar-burger burger" data-target="navbarMenu">
                            <span></span>
                            <span></span>
                            <span></span>
                        </span>
                    </div>
                    <div className="navbar-menu">
                        <div className="navbar-end">
                            <span className="navbar-item">
                                <a className="button is-white is-outlined" href="#">
                                    <span className="icon">
                                        <i className="fa fa-home"></i>
                                    </span>
                                    <span>Home</span>
                                </a>
                            </span>
                            <span className="navbar-item">
                                <a className="button is-white is-outlined" href="#">
                                    <span className="icon">
                                        <i className="fa fa-superpowers"></i>
                                    </span>
                                    <span>Examples</span>
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;