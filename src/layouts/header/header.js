import { Component } from 'react';

import Nav from '../../components/nav/nav';
import Overlay from '../../components/overlay/overlay'; 
import Burger from '../../components/burger/burger';

import logo from '../../assets/img/logo/logo.svg';

import './header.scss';


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isMenuOpen: false
        };
        this.pagePosition = 0;
      }
    
      componentWillUnmount() {
        this.enScroll();
      }
    
      disScroll = () => {
        this.pagePosition = window.scrollY;
        document.body.classList.add('dis-scroll');
        document.body.style.top = `-${this.pagePosition}px`;
      }
    
      enScroll = () => {
        document.body.classList.remove('dis-scroll');
        window.scrollTo({ top: this.pagePosition });
        document.body.style.top = '';
      }
    
      toggleMenu = () => {
        this.setState(prevState => {
          const newState = !prevState.isMenuOpen;
          
          if (newState) {
            this.disScroll();
          } else {
            this.enScroll();
          }
          
          return { isMenuOpen: newState };
        });
      }

    render() {
        const headerClassMod = this.props.headerClassMod;
        const { isMenuOpen } = this.state;
        return (
            <div id='top' className={`header ${headerClassMod}`}>
                <div className="container header__container">
                    <a href="#" className='logo'>
                        <img src={logo} alt="logo" />
                    </a>
                    <Nav className={`nav ${isMenuOpen ? 'nav_active' : ''}`} />
                    <div className="header-contacts">
                        <a href="tel:4055550128" className='header-contacts__link contacts-link contacts-link_call'>
                            <span className="small small_bold">Call us</span>
                            <span className="large large_regular contacts-link__value">(405) 555-0128</span>
                        </a>
                        <a href="mailto:hello@createx.com" className='header-contacts__link contacts-link contacts-link_mail'>
                            <span className="small small_bold">Talk to us</span>
                            <span className="large large_regular contacts-link__value">hello@createx.com</span>
                        </a>
                    </div>
                    <Burger 
                        isActive={isMenuOpen} 
                        onClick={this.toggleMenu} 
                    />

                    {isMenuOpen && <Overlay onClick={this.toggleMenu} />}
                </div>
            </div>
        )
    }
}

export default Header;