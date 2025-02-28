import { Component } from 'react';

import Header from '../../layouts/header/header';
import HeroPage from '../../layouts/hero-page/hero-page';
import ContactsForm from '../../layouts/contacts-form/contacts-form';
import ContactsInfo from '../../layouts/contacts-info/contacts-info';
import Footer from '../../layouts/footer/footer';

import GoTop from '../../components/to-top/to-top';


class ContactsUs extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const headerClassMod = 'header_secondary';
        return(
            <>
                <Header headerClassMod={headerClassMod} />
                <div className="main">
                    <HeroPage title='CONTACTS' descr={`Contact us for all your construction needs. We always welcome any questions and comments.`} page='contacts-us' />
                    <ContactsForm />
                    <ContactsInfo />
                </div>
                <Footer />
                <GoTop scrollThreshold={500} />
            </>
            
        )
    }
}

export default ContactsUs;