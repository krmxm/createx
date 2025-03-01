import { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './nav.scss';

class Nav extends Component {
  render() {
    const { className } = this.props;

    return (
      <nav className={className}>
        <ul className='nav__list'>
            <li className='nav__item'>
                <NavLink 
                to="/home" 
                className={({ isActive }) => 
                    `nav__link base base_bold${isActive ? ' nav__link_active' : ''}`
                }
                >
                Home
                </NavLink>
            </li>
          <li className='nav__item'>
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                `nav__link base base_bold${isActive ? ' nav__link_active' : ''}`
              }
            >
              About Us
            </NavLink>
          </li>
          <li className='nav__item'>
            <NavLink 
              to="/services" 
              className={({ isActive }) => 
                `nav__link base base_bold${isActive ? ' nav__link_active' : ''}`
              }
            >
              Services
            </NavLink>
          </li>
          <li className='nav__item'>
            <NavLink 
              to="/work" 
              className={({ isActive }) => 
                `nav__link base base_bold${isActive ? ' nav__link_active' : ''}`
              }
            >
              Work
            </NavLink>
          </li>
          <li className='nav__item'>
            <NavLink 
              to="/news" 
              className={({ isActive }) => 
                `nav__link base base_bold${isActive ? ' nav__link_active' : ''}`
              }
            >
              News
            </NavLink>
          </li>
          <li className='nav__item'>
            <NavLink 
              to="/contacts" 
              className={({ isActive }) => 
                `nav__link base base_bold${isActive ? ' nav__link_active' : ''}`
              }
            >
              Contacts
            </NavLink>
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
    );
  }
}

export default Nav;