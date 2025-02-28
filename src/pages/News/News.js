import { Component } from 'react';

import Header from '../../layouts/header/header';
import HeroPage from '../../layouts/hero-page/hero-page';
import Categories from '../../layouts/categories/categories';
import ContactsSection from '../../layouts/contacts-section/contacts-section';
import Footer from '../../layouts/footer/footer';

import GoTop from '../../components/to-top/to-top';


import './News.scss';

class News extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="site-container">
                <Header headerClassMod='header_secondary' />
                <HeroPage title='NEWS' descr={`Stay tuned with our news, expert tips and articles.`} page='news' />
                <Categories />
                <ContactsSection />
                <Footer />
                <GoTop scrollThreshold={500} />
            </div>
        )
    }
}

export default News;