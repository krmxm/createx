import { Component } from 'react';

import Header from '../../layouts/header/header';
import HeroPage from '../../layouts/hero-page/hero-page';
import WeOffer from '../../layouts/we-offer/we-offer';
import HowWeDo from '../../layouts/how-we-do/how-we-do';
import RelatedProjects from '../../layouts/related-projects/related-projects';
import Benefits from '../../layouts/services-benefits/services-benefits';
import Pricing from '../../layouts/pricing/pricing';
import PartnersSection from '../../layouts/partners-section/partners-section';
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
                <HeroPage title='INTERIOR DESIGN' descr={`Dui augue nec mi mi. Ut ac lectus donec fames pellentesque. Laoreet aenean vulputate elementum blandit amet.`} page='inner' />
                <WeOffer />
                <HowWeDo />
                <Benefits />
                <RelatedProjects />
                <Pricing />
                <PartnersSection title='Supported by 12+ partners' />
                <ContactsSection />
                <Footer />
            </>
        )
    }
}

export default ServicesPageInner;