import { Component } from 'react';

import './hero-page.scss';

class HeroPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="hero-page">
                <div className="container">
                    <ul className="breadcrumbs hero-page__breadcrumbs">
                        <li className="breadcrumbs__item">
                            <a href="#" className="small small_regular breadcrumbs__link hero-services__breadcrumbs">Homepage</a>
                        </li>
                        <li className="breadcrumbs__item">
                            <a className="small small_regular breadcrumbs__link">Services</a>
                        </li>
                    </ul>
                    <h1 className="title hero-services__title">Services</h1>
                    <p className="lead lead_regular hero-page__descr">
                        If{'\u00A0'}you are looking for a{'\u00A0'}full-service construction company, look to{'\u00A0'}Createx Construction Bureau. We{'\u00A0'}are doing our best to{'\u00A0'}be{'\u00A0'}a{'\u00A0'}partner for all of{'\u00A0'}your construction needs.
                    </p>
                </div>
            </div>
        )
    }
}

export default HeroPage;

