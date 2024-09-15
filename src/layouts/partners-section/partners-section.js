import { Component } from 'react';
import Partners from '../../components/partners/partners';

import './partners-section.scss';

const slideData = [
    require('../../assets/img/partners/partner-1.png'), require('../../assets/img/partners/partner-2.png'), require('../../assets/img/partners/partner-3.png'), require('../../assets/img/partners/partner-4.png'), require('../../assets/img/partners/partner-5.png'), require('../../assets/img/partners/partner-6.png')
];


class PartnersSection extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const title = this.props.title;
        return (
            <div className="partners-section">
                <Partners title={title} logos={slideData} />
            </div>
        )
    }
}

export default PartnersSection;