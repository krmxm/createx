import { Component } from 'react';

import Header from '../../layouts/header/header';
import HeroPage from '../../layouts/hero-page/hero-page';
import Achieve from '../../layouts/achieve/achieve';
import AboutMission from '../../layouts/about-mission/about-mission';
import History from '../../layouts/history/history';
import ContactsSection from '../../layouts/contacts-section/contacts-section';
import Footer from '../../layouts/footer/footer';

class AboutUs extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const headerClassMod = 'header_secondary';
        return (
            <>
                <Header headerClassMod={headerClassMod} />
                <HeroPage title='ABOUT US' descr={`Createx Construction Bureau has been successfully operating in the USA construction market since 2000. We are proud to offer you quality construction and exemplary service.`} page='about-us' />
                <Achieve />
                <AboutMission />
                <History />
                <ContactsSection />
                <Footer />
            </>
        )
    }
}

export default AboutUs;