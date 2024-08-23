import { Component } from 'react';

import Header from '../../layouts/header/header';
import Hero from '../../layouts/hero/hero';
import AboutSection from '../../layouts/about-section/about-section';
import Mission from '../../layouts/mission/mission';
import ServicesSection from '../../layouts/services-section/services-section';
import PortfolioSection from '../../layouts/porfolio-section/portfolio-section';
import PartnersSection from '../../layouts/partners-section/partners-section';
import Testimonials from '../../layouts/testimonials/testimonials';

import './HomePage.scss';


class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            testimonialsSlides: [
                { id: 1, authorImg: require('../../assets/img/testmonials-author.png'), descr: 'Ipsum aute sunt aliquip aute et occaecat. Anim minim do cillum eiusmod enim. Consectetur magna cillum consequat minim  laboris cillum laboris voluptate minim proident exercitation ullamco.', authorName: 'Shawn Edwards', authorPosition: 'Position, Company name' },
                { id: 2, authorImg: require('../../assets/img/testmonials-author.png'), descr: 'Ipsum aute sunt aliquip aute et occaecat. Anim minim do cillum eiusmod enim. Consectetur magna cillum consequat minim  laboris cillum laboris voluptate minim proident exercitation ullamco.', authorName: 'John Smite', authorPosition: 'Position, Company name' }
            ]
        }

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
                <PartnersSection />
                <Testimonials testimonialsSlides={this.state.testimonialsSlides} />
            </>
        )
    }
}

export default HomePage;
