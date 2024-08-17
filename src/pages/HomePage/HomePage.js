import { Component } from 'react';

import Header from '../../layouts/header/header';
import Hero from '../../layouts/hero/hero';
import AboutSection from '../../layouts/about-section/about-section';
import Mission from '../../layouts/mission/mission';
import ServicesSection from '../../layouts/services-section/services-section';
import PortfolioSection from '../../layouts/porfolio-section/portfolio-section';

import './HomePage.scss';


class HomePage extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        const headerClassMod = 'header_main'
        return (
            <>
                <Header headerClassMod={headerClassMod} />
                <Hero />
                <AboutSection />
                <Mission />
                <ServicesSection />
                <PortfolioSection />
            </>
        )
    }
}

export default HomePage;
