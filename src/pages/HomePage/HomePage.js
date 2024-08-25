import { Component } from 'react';

import Header from '../../layouts/header/header';
import Hero from '../../layouts/hero/hero';
import AboutSection from '../../layouts/about-section/about-section';
import Mission from '../../layouts/mission/mission';
import ServicesSection from '../../layouts/services-section/services-section';
import PortfolioSection from '../../layouts/porfolio-section/portfolio-section';
import PartnersSection from '../../layouts/partners-section/partners-section';
import Testimonials from '../../layouts/testimonials/testimonials';
import Facts from '../../layouts/facts/facts';
import RecentNews from '../../layouts/recent-news/recent-news';
import ContactsSection from '../../layouts/form-field/form-field';

import './HomePage.scss';


class HomePage extends Component {
    constructor(props) {
        super(props);
        this.testimonialsSlides = [
            { id: 1, authorImg: require('../../assets/img/testmonials-author.png'), descr: 'Ipsum aute sunt aliquip aute et occaecat. Anim minim do cillum eiusmod enim. Consectetur magna cillum consequat minim  laboris cillum laboris voluptate minim proident exercitation ullamco.', authorName: 'Shawn Edwards', authorPosition: 'Position, Company name' },
            { id: 2, authorImg: require('../../assets/img/testmonials-author.png'), descr: 'Ipsum aute sunt aliquip aute et occaecat. Anim minim do cillum eiusmod enim. Consectetur magna cillum consequat minim  laboris cillum laboris voluptate minim proident exercitation ullamco.', authorName: 'John Smite', authorPosition: 'Position, Company name' }
        ];
        this.recentNews = [
            { id: 1, recentArticleImg: require('../../assets/img/recent-article/recent-article-1.jpeg'), recentArticleLinkText: 'How to Build Climate Change-Resilient Infrastructure', recentArticleMetaLinkText: 'Industry News', recentArticleMetaTime: '2024-06-24 19:00', recentArticleMetaComments: '4', recentArticleDescr: 'Ipsum aliquet nisi, hendrerit rhoncus quam tortor, maecenas faucibus. Tincidunt aliquet sit vel, venenatis nulla. Integer bibendum turpis convallis enim, nibh convallis Ipsum aliquet nisi, hendrerit rhoncus quam tortor' },

            { id: 2, recentArticleImg: require('../../assets/img/recent-article/recent-article-2.jpeg'), recentArticleLinkText: 'How Construction Can Help Itself', recentArticleMetaLinkText: 'Innovation', recentArticleMetaTime: '2021-01-20 19:00', recentArticleMetaComments: 'No', recentArticleDescr: 'Ipsum aliquet nisi, hendrerit rhoncus quam tortor, maecenas faucibus. Tincidunt aliquet sit vel, venenatis nulla. Integer bibendum turpis convallis enim, nibh convallis Ipsum aliquet nisi, hendrerit rhoncus quam tortor' },

            { id: 3, recentArticleImg: require('../../assets/img/recent-article/recent-article-3.jpeg'), recentArticleLinkText: 'Types of Flooring Materials', recentArticleMetaLinkText: 'Company News', recentArticleMetaTime: '2023-12-25 19:00', recentArticleMetaComments: 'No', recentArticleDescr: 'Ipsum aliquet nisi, hendrerit rhoncus quam tortor, maecenas faucibus. Tincidunt aliquet sit vel, venenatis nulla. Integer bibendum turpis convallis enim, nibh convallis Ipsum aliquet nisi, hendrerit rhoncus quam tortor' },

            { id: 4, recentArticleImg: require('../../assets/img/recent-article/recent-article-1.jpeg'), recentArticleLinkText: 'recent-article-1', recentArticleMetaLinkText: 'Industry News', recentArticleMetaTime: '2020-06-24 19:00', recentArticleMetaComments: '4', recentArticleDescr: 'Ipsum aliquet nisi, hendrerit rhoncus quam tortor, maecenas faucibus. Tincidunt aliquet sit vel, venenatis nulla. Integer bibendum turpis convallis enim, nibh convallis Ipsum aliquet nisi, hendrerit rhoncus quam tortor' }


        ]

    }

    render() {
        const headerClassMod = 'header_main'
        return (
            <>
                <Header headerClassMod={headerClassMod} />
                <Hero />
                <AboutSection />
                <Mission />
                <ServicesSection />
                <PortfolioSection />
                <PartnersSection />
                <Testimonials testimonialsSlides={this.testimonialsSlides} />
                <Facts />
                <RecentNews recentNews={this.recentNews} />
                <ContactsSection />
            </>
        )
    }
}

export default HomePage;
