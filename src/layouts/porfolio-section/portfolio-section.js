import { Component } from 'react';

import './portfolio-section.scss'

class PortfolioSection extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="portfolio-section">
                <div className="container">
                    <h2 className="title title_regular portfolio-section__title">Browse our selected projects 
                    and learn more about our work</h2>
                </div>
            </div>
        )
    }
}

export default PortfolioSection;