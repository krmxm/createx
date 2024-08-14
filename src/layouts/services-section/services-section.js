import { Component } from 'react';

import './services-section.scss';

class ServicesSection extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className="services-section section-offset">
                <div className="container">
                    <h2 className="title title_regular title_regular-center">Our services</h2>
                    <p className="large large_regular large_center large_section-descr-mb">Createx Construction Bureau is&nbsp;a&nbsp;construction giant with a&nbsp;full range of&nbsp;construction services.</p>
                </div>
            </section>
        )
    }
}

export default ServicesSection;