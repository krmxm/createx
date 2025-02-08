import { Component } from 'react';

import Nav from '../../components/nav/nav';

import logo from '../../assets/img/logo/logo.svg';

import './header.scss';


class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const headerClassMod = this.props.headerClassMod;
        return (
            <div id='top' className={`header ${headerClassMod}`}>
                <div className="container header__container">
                    <a href="#" className='logo'>
                        <img src={logo} alt="logo" />
                    </a>
                    <Nav className={`header__nav`} />
                    <div className="header-contacts">
                        <a href="tel:4055550128" className='header-contacts__link contacts-link contacts-link_call'>
                            <span className="small small_bold">Call us</span>
                            <span className="large large_regular contacts-link__value">(405) 555-0128</span>
                        </a>
                        <a href="mailto:hello@createx.com" className='header-contacts__link contacts-link contacts-link_mail'>
                            <span className="small small_bold">Talk to us</span>
                            <span className="large large_regular contacts-link__value">hello@createx.com</span>
                        </a>
                        <button class="btn-reset burger" aria-label="Открыть меню">
                            <span class="burger__line"></span>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;