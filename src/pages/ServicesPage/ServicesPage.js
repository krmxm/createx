import { Component } from 'react';

import Header from '../../layouts/header/header';
import HeroPage from '../../layouts/hero-page/hero-page';
import ServicesContent from '../../layouts/services-content/services-content';
import ContactsSection from '../../layouts/contacts-section/contacts-section';
import Footer from '../../layouts/footer/footer';

import './ServicesPage.scss';

class ServicesPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const headerClassMod = 'header_secondary'
        return (
            <>
                <Header headerClassMod={headerClassMod} />
                <HeroPage />
                <ServicesContent />
                <ContactsSection />
                <Footer />
            </>
        )
    }
}

export default ServicesPage;