import { Component } from 'react'

import './nav.scss';

class Nav extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const className = this.props.className;
        return (
            <nav className='nav'>
                <ul className={`nav__list ${className}`}>
                    <li className='nav__item'><a href="#" className='nav__link'>About Us</a></li>
                    <li className='nav__item'><a href="#" className='nav__link'>Services</a></li>
                    <li className='nav__item'><a href="#" className='nav__link'>Work</a></li>
                    <li className='nav__item'><a href="#" className='nav__link'>News</a></li>
                    <li className='nav__item'><a href="#" className='nav__link'>Contacts</a></li>
                </ul>
            </nav>
        )
    }
}

export default Nav;