import { Component } from 'react';
import { ReactComponent as Services1 } from '../../assets/img/sprite/services-1.svg';
import { ReactComponent as Services2 } from '../../assets/img/sprite/services-2.svg';
import { ReactComponent as Services3 } from '../../assets/img/sprite/services-3.svg';
import { ReactComponent as Services4 } from '../../assets/img/sprite/services-4.svg';
import LearnMore from '../../components/learn-more/learn-more';

import './services-section.scss';

class ServicesSection extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <section className="services-section section-offset">
                <div className="container">
                    <h2 className="title title_h2 title_h2-center">Our services</h2>
                    <p className="large large_regular large_center large_section-descr-mb">Createx Construction Bureau is&nbsp;a&nbsp;construction giant with a&nbsp;full range of&nbsp;construction services.</p>
                    <ul className="services-list services-section__list">
                        <li className="services-list__item">
                            <a href="#" className="services-item services-item_construction">
                                <div className="services-item__content">
                                    <Services1 className="services-item__icon" />
                                    <h3 className="services-item__title lead lead_bold">Construction</h3>
                                </div>
                            </a>
                        </li>
                        <li className="services-list__item">
                            <a href="#" className="services-item services-item">
                                <div className="services-item__content">
                                    <Services2 className="services-item__icon" />
                                    <h3 className="services-item__title lead lead_bold">Project Development</h3>
                                </div>
                            </a>
                        </li>
                        <li className="services-list__item">
                            <a href="#" className="services-item services-item">
                                <div className="services-item__content">
                                    <Services3 className="services-item__icon" />
                                    <h3 className="services-item__title lead lead_bold">Interior Design</h3>
                                </div>
                            </a>
                        </li>
                        <li className="services-list__item">
                            <a href="#" className="services-item services-item">
                                <div className="services-item__content">
                                    <Services4 className="services-item__icon" />
                                    <h3 className="services-item__title lead lead_bold">Repairs</h3>
                                </div>
                            </a>
                        </li>
                    </ul>
                    <LearnMore title='Learn more about our services' textBtn='View services' classLearnMore='services-section__learn' />
                </div>
            </section>
        )
    }
}

export default ServicesSection;