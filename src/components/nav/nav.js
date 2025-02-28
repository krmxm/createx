import { Component } from 'react'

import './nav.scss';

class Nav extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const className = this.props.className;
        console.log("Полученный класс в Nav:", className);
        return (
            <nav className={className}>
                <ul className='nav__list'>
                    <li className='nav__item'>
                        <a href="#" className='nav__link base base_bold'>About Us</a>
                    </li>
                    <li className='nav__item'>
                        <a href="#" className='nav__link base base_bold'>Services</a>
                    </li>
                    <li className='nav__item'>
                        <a href="#" className='nav__link base base_bold'>Work</a>
                    </li>
                    <li className='nav__item'>
                        <a href="#" className='nav__link base base_bold'>News</a>
                    </li>
                    <li className='nav__item'>
                        <a href="#" className='nav__link base base_bold'>Contacts</a>
                    </li>
                </ul>

                <div className="header-contacts header-contacts_nav">
                    <a href="tel:4055550128" className='header-contacts__link contacts-link contacts-link_call'>
                        <span className="small small_bold">Call us</span>
                        <span className="large large_regular contacts-link__value">(405) 555-0128</span>
                    </a>
                    <a href="mailto:hello@createx.com" className='header-contacts__link contacts-link contacts-link_mail'>
                        <span className="small small_bold">Talk to us</span>
                        <span className="large large_regular contacts-link__value">hello@createx.com</span>
                    </a>
                </div>
            </nav>
        )
    }
}

export default Nav;