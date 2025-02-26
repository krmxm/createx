import { Component } from 'react';
import Partners from '../../components/partners/partners';

import './our-partners.scss';

const slideData = [
    require('../../assets/img/partners/partner-1.png'), require('../../assets/img/partners/partner-2.png'), require('../../assets/img/partners/partner-3.png'), require('../../assets/img/partners/partner-4.png'), require('../../assets/img/partners/partner-5.png'), require('../../assets/img/partners/partner-6.png'), require('../../assets/img/partners/partner-7.png'), require('../../assets/img/partners/partner-8.png'), require('../../assets/img/partners/partner-9.png'), require('../../assets/img/partners/partner-10.png'), require('../../assets/img/partners/partner-11.png'), require('../../assets/img/partners/partner-12.png')
];


class OurPartners extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const title = this.props.title;
        return (
            <div className="our-partners section-offset">
                <Partners title={title} subtitle='We are supported by 12+ industry bodies and media partners' logos={slideData} />
            </div>
        )
    }
}

export default OurPartners;