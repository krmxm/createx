import { Component } from 'react';

import Header from '../../layouts/header/header';
import HeroPage from '../../layouts/hero-page/hero-page';
import SliderGellary from '../../components/slider-gallery/slider-gallery';
import ContactsSection from '../../layouts/contacts-section/contacts-section';
import Footer from '../../layouts/footer/footer';

import './SomeProject.scss';

class SomeProject extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const headerClassMod = 'header_secondary'
        return (
            <>
                <Header headerClassMod={headerClassMod} />
                <HeroPage title='Modern Cottage' page='some-project' />
                <SliderGellary />
                <ContactsSection />
                <Footer />
            </>
        )
    }
}

export default SomeProject;