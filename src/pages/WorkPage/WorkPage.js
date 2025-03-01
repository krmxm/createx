import { Component } from 'react';

import Header from '../../layouts/header/header';
import HeroPage from '../../layouts/hero-page/hero-page';
import Portfolio from '../../layouts/portfolio/portfolio';
import Testimonials from '../../layouts/testimonials/testimonials';
import PartnersSection from '../../layouts/partners-section/partners-section';
import ContactsSection from '../../layouts/contacts-section/contacts-section';
import Footer from '../../layouts/footer/footer';

import GoTop from '../../components/to-top/to-top';


import './WorkPage.scss';

class WorkPage extends Component {
    constructor(props) {
        super(props);
        this.testimonialsSlides = [
            { id: 1, authorImg: require('../../assets/img/testmonials-author.png'), descr: 'Ipsum aute sunt aliquip aute et occaecat. Anim minim do cillum eiusmod enim. Consectetur magna cillum consequat minim  laboris cillum laboris voluptate minim proident exercitation ullamco.', authorName: 'Shawn Edwards', authorPosition: 'Position, Company name' },
            { id: 2, authorImg: require('../../assets/img/testmonials-author.png'), descr: 'Ipsum aute sunt aliquip aute et occaecat. Anim minim do cillum eiusmod enim. Consectetur magna cillum consequat minim  laboris cillum laboris voluptate minim proident exercitation ullamco.', authorName: 'John Smite', authorPosition: 'Position, Company name' }
        ];
    }

    render() {
        const headerClassMod = 'header_secondary';
        return (
            <>
                <Header headerClassMod={headerClassMod} />
                <HeroPage title='OUR WORK' descr={`Our portfolio represents 20 years of construction experience backed by a passion for perfect client service, quality and innovations in consctuction industry.`} page='work' />
                <Portfolio />
                <Testimonials testimonialsSlides={this.testimonialsSlides} />
                <PartnersSection title='Our clients' bgLight={true}/>
                <ContactsSection />
                <Footer />
                <GoTop scrollThreshold={500} />
            </>
        )
    }
}

export default WorkPage;