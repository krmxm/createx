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
        this.servicesContent = [
            { id: 0, servicesImg: require('../../assets/img/services-content/services-content-1.jpeg'), title: 'Construction', descr: 'Sapien, feugiat faucibus orci arcu, vulputate. Tristique varius consectetur vulputate arcu, scelerisque nisi, nibh. Enim semper id sodales ultricies sed ut ut augue. Mattis habitant venenatis, gravida posuere massa ac interdum. Eget aliquam dignissim ut vestibulum.' },
            { id: 1, servicesImg: require('../../assets/img/services-content/services-content-2.jpeg'), title: 'Project Development', descr: 'Volutpat tellus mauris sit sit. Posuere ut sit vestibulum amet viverra in. Est nulla lectus purus tincidunt massa tortor. Hendrerit vulputate elementum blandit massa vitae amet felis eget.' },
            { id: 2, servicesImg: require('../../assets/img/services-content/services-content-3.jpeg'), title: 'Interior Design', descr: 'Eleifend orci massa et facilisis orci feugiat ac. Congue in ut lacus, turpis accumsan gravida. Aliquet mattis dignissim massa sociis a, id bibendum. Egestas lorem eros, mi cras amet, vel eget molestie. Turpis enim arcu, amet donec massa pellentesque nulla duis. Arcu dictum metus sed purus senectus faucibus eget elementum pretium.' },
            { id: 3, servicesImg: require('../../assets/img/services-content/services-content-4.jpeg'), title: 'Repairs', descr: 'Facilisis cursus feugiat sit pulvinar amet. Ac facilisi dictum commodo, tortor gravida pretium, orci. Nunc sit sollicitudin id egestas mattis. Turpis viverra nec urna ultrices urna.' }
        ]
    }

    render() {
        const headerClassMod = 'header_secondary'
        return (
            <>
                <Header headerClassMod={headerClassMod} />
                <HeroPage title='SERVICES' descr={`If${'\u00A0'}you are looking for a${'\u00A0'}full-service construction company, look${'\u00A0'}to Createx Construction Bureau. We${'\u00A0'}are doing our best to be a partner for all of${'\u00A0'}your construction needs.`} />
                <ServicesContent servicesContent={this.servicesContent} />
                <ContactsSection />
                <Footer />
            </>
        )
    }
}

export default ServicesPage;