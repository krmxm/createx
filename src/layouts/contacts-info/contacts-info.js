import { Component } from 'react';

import { ReactComponent as Whathapp } from '../../assets/img/sprite/whatsapp.svg';
import { ReactComponent as Messanger } from '../../assets/img/sprite/messanger.svg';
import { ReactComponent as Facebook } from '../../assets/img/sprite/facebook.svg';
import { ReactComponent as Twitter } from '../../assets/img/sprite/twitter.svg'
import { ReactComponent as YouTube } from '../../assets/img/sprite/YouTube.svg';

import './contacts-info.scss';

class ContactsInfo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <section className="contacts-info section-offset">
                <div className="container">
                    <h2 class="title title_h2 title_h2-center">Our offices</h2>
                    <p class="large large_regular large_center large_section-descr-mb">Give&nbsp;us a&nbsp;call, send&nbsp;us a&nbsp;note or&nbsp;visit our office. We&nbsp;can&rsquo;t wait to&nbsp;hear from you!</p>
                    <ul className="list-reset contacts-info__list">
                        <li className="contacts-info__item">
                            <h4 className="title title_h4 contacts-info__subtitle">New York, USA</h4>
                            <address className="base base_regular   contacts-info__address"> 8502 Preston Rd. Inglewood, New York 98380</address>
                            <a className="base base_regular     contacts-info__link">See on the map</a>
                            <div class="contacts-info__bottom">
                        <div class="base base_regular contacts-info__element">
                                    Call:
                            <a href="tel:4055550128" class="base base_regular contacts-info__value"> (405) 555-0128</a>
                                </div>
                        <div class="base base_regular contacts-info__element">
                                    Email:
                            <a href="mailto:hello@createx.com" class="base base_regular contacts-info__value"> hello@createx.com</a>
                                </div>
                        <div class="base base_regular contacts-info__element">
                                    Schedule:
                            <span class="base base_regular contacts-info__value"> Mon - Fri 9:00 - 18:00</span>
                                </div>
                            </div>
                        </li>
                        <li className="contacts-info__item">
                            <h4 className="title title_h4 contacts-info__subtitle">New Jersey, USA</h4>
                            <address className="base base_regular   contacts-info__address">2464 Royal Ln. Mesa, New Jersey 45463</address>
                            <a className="base base_regular contacts-info__link">See on the map</a>
                            <div class="contacts-info__bottom">
                            <div class="base base_regular contacts-info__element">
                                    Call:
                                <a href="tel:8085550111" class="base base_regular contacts-info__value"> (808) 555-0111</a>
                                </div>
                            <div class="base base_regular contacts-info__element">
                                    Email:
                                <a href="mailto:hello@createx.com" class="base base_regular contacts-info__value"> hello@createx.com</a>
                                </div>
                            <div class="base base_regular contacts-info__element">
                                    Schedule:
                                <span class="base base_regular contacts-info__value"> Mon - Fri 9:00 - 18:00</span>
                                </div>
                            </div>
                        </li>
                        <li className="contacts-info__item">
                            <h4 className="title title_h4 contacts-info__subtitle">San Francisco, USA</h4>
                            <address className="base base_regular   contacts-info__address">8502 Preston Rd. Inglewood, San Francisco 98380</address>
                            <a className="base base_regular contacts-info__link">See on the map</a>
                            <div class="contacts-info__bottom">
                            <div class="base base_regular contacts-info__element">
                                    Call:
                                <a href="tel:5055550125" class="base base_regular contacts-info__value"> (505) 555-0125</a>
                                </div>
                            <div class="base base_regular contacts-info__element">
                                    Email:
                                <a href="mailto:hello@createx.com" class="base base_regular contacts-info__value"> hello@createx.com</a>
                                </div>
                            <div class="base base_regular contacts-info__element">
                                    Schedule:
                                <span class="base base_regular contacts-info__value"> Mon - Fri 10:00 - 18:00</span>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <h2 class="title title_h2 title_h2-center contacts-info__soc">Find us at</h2>
                <ul className="social contacts-info__social">
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
            </section>
        )
    }
}

export default ContactsInfo;