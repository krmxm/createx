import { Component } from 'react';

import logo from '../../assets/img/logo/logo-footer.svg';
import { ReactComponent as Whathapp } from '../../assets/img/sprite/whatsapp.svg';
import { ReactComponent as Messanger } from '../../assets/img/sprite/messanger.svg';
import { ReactComponent as Facebook } from '../../assets/img/sprite/facebook.svg';
import { ReactComponent as Twitter } from '../../assets/img/sprite/twitter.svg'
import { ReactComponent as YouTube } from '../../assets/img/sprite/YouTube.svg';



import './footer.scss';

class Footer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <footer className='footer'>
                <div className="container footer__container grid">
                    <div className="footer__left">
                        <div className="footer__top">
                            <a href="#" className='logo footer__logo'>
                                <img src={logo} alt="logo" />
                            </a>
                            <ul className="social footer__social">
                                <li className="social__item">
                                    <a href="#" target='_blank' className="social__link" aria-label='WatsApp'>
                                        <Whathapp />
                                    </a>
                                </li>
                                <li className="social__item">
                                    <a href="#" target='_blank' className="social__link" aria-label='Messenger'>
                                        <Messanger />
                                    </a>
                                </li>
                                <li className="social__item">
                                    <a href="#" target='_blank' className="social__link" aria-label='Facebook'>
                                        <Facebook />
                                    </a>
                                </li>
                                <li className="social__item">
                                    <a href="#" target='_blank' className="social__link" aria-label='Twitter'>
                                        <Twitter />
                                    </a>
                                </li>
                                <li className="social__item">
                                    <a href="#" target='_blank' className="social__link" aria-label='YouTube'>
                                        <YouTube />
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <p className="small small_regular footer__descr">Createx Construction Bureau has been successfbully operating in{'\u00A0'}the USA construction market since 2000. We{'\u00A0'}are proud to{'\u00A0'}offer you quality construction and exemplary service. Our mission is{'\u00A0'}to{'\u00A0'}set the highest standards for construction sphere.</p>
                    </div>
                    <form action="#" className="footer-form footer__form">
                        <h4 className="title title_h5 footer-form__title">
                            Let’s{'\u00A0'}stay in{'\u00A0'}touch
                        </h4>
                        <div className="footer-form__items">
                            <label className='form-field'>
                                <input className='form__input form-field__input' type="email" placeholder='Your email address' name='email' id='email' />
                            </label>
                            <button className="btn-reset btn btn_size-regular btn_theme-primary footer-form__btn" type='submit'>subscribe</button>
                        </div>
                        <p className="extrasmall extrasmall_regular footer-form__descr">
                            *Subscribe to{'\u00A0'}our newsletter to{'\u00A0'}receive communications and early updates from Createx Construction Bureau.
                        </p>
                    </form>
                    <adsress className="footer-address footer__address">
                        <h4 className="footer-address__title footer-title">HEAD OFFICE</h4>
                        <span className="base base_regular footer-address__item">
                            <span className="base base_regular footer-address__name">
                                Address:
                            </span>
                            8502 Preston Rd. Inglewood, New York
                        </span>
                        <span className="base base_regular footer-address__item">
                            <span className="base base_regular footer-address__name">
                                Call:
                            </span>
                            <a href="tel:4055550128" className='base base_regular'> (405) 555-0128</a>
                        </span>
                        <span className="base base_regular footer-address__item">
                            <span className="base base_regular footer-address__name">
                                Email:
                            </span>
                            <a href="mailto:hello@createx.com" className='base base_regular'> hello@createx.com</a>
                        </span>
                    </adsress>
                    <nav className="footer-nav footer__nav" title="secondary navigation">

                        <div className="footer-nav__col">
                            <h3 className="footer-nav__list footer-title">Who we are</h3>
                            <ul className="footer-nav__list">
                                <li className="footer-nav__item">
                                    <a href="#" className="base base_regular footer-nav__link">About Us</a>
                                </li>
                                <li className="footer-nav__item">
                                    <a href="#" className="base base_regular footer-nav__link">Available Positions</a>
                                </li>
                                <li className="footer-nav__item">
                                    <a href="#" className="base base_regular footer-nav__link">Contacts</a>
                                </li>
                            </ul>
                        </div>

                        <div className="footer-nav__col">
                            <h3 className="footer-nav__list footer-title">Our experience</h3>
                            <ul className="footer-nav__list">
                                <li className="footer-nav__item">
                                    <a href="#" className="base base_regular footer-nav__link">Services</a>
                                </li>
                                <li className="footer-nav__item">
                                    <a href="#" className="base base_regular footer-nav__link">Work</a>
                                </li>
                                <li className="footer-nav__item">
                                    <a href="#" className="base base_regular footer-nav__link">News</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <small className="extrasmall extrasmall_regular footer__copyright">
                        &#169;&nbsp;All rights reserved. Made with <span>by Createx Studio</span>
                    </small>
                </div>
            </footer>
        )
    }
}

export default Footer;