import { Component } from 'react';

import Header from '../../layouts/header/header';
import HeroPage from '../../layouts/hero-page/hero-page';
import WeOffer from '../../layouts/we-offer/we-offer';
import HowWeDo from '../../layouts/how-we-do/how-we-do';
import ContactsSection from '../../layouts/contacts-section/contacts-section';
import Footer from '../../layouts/footer/footer';

import './ServicesPageInner.scss';

class ServicesPageInner extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const headerClassMod = 'header_secondary'
        return (
            <>
                <Header headerClassMod={headerClassMod} />
                <HeroPage title='INTERIOR DESIGN' descr={`Dui augue nec mi mi. Ut ac lectus donec fames pellentesque. Laoreet aenean vulputate elementum blandit amet.`} inner />
                <WeOffer />
                <HowWeDo />
                <ContactsSection />
                <Footer />
            </>
        )
    }
}

export default ServicesPageInner;