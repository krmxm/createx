import { Component } from 'react';

import Header from '../../layouts/header/header';
import HeroPage from '../../layouts/hero-page/hero-page';

import Footer from '../../layouts/footer/footer';

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
                </div>
                <Footer />
            </>
            
        )
    }
}

export default ContactsUs;