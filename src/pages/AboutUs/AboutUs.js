import { Component } from 'react';

import Header from '../../layouts/header/header';
import HeroPage from '../../layouts/hero-page/hero-page';
import Achieve from '../../layouts/achieve/achieve';
import AboutMission from '../../layouts/about-mission/about-mission';
import History from '../../layouts/history/history';
import OurPartners from '../../layouts/our-partners/our-partners';
import TeamCards from '../../layouts/team/team';
import ContactsSection from '../../layouts/contacts-section/contacts-section';
import Footer from '../../layouts/footer/footer';

class AboutUs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            teamData: [
                { id: 0, picture: require('../../assets/img/team/team-1.jpeg'), name: 'Courtney Alexander', post: 'CEO, Co-Founder' },
                { id: 1, picture: require('../../assets/img/team/team-2.jpeg'), name: 'Calvin Fox', post: 'CTO, Co-Founder' },
                { id: 2, picture: require('../../assets/img/team/team-3.jpeg'), name: 'Johnny Lane', post: 'Commercial Manager' },
                { id: 3, picture: require('../../assets/img/team/team-4.jpeg'), name: 'Diane Mccoy', post: 'Director of Human Resources' },
                { id: 4, picture: require('../../assets/img/team/team-5.jpeg'), name: 'Judith Warren', post: 'Lead Accountant' },
                { id: 5, picture: require('../../assets/img/team/team-6.jpeg'), name: 'Floyd Simmmons', post: 'Finacial Director' },
                { id: 6, picture: require('../../assets/img/team/team-7.jpeg'), name: 'Serenity Edwards', post: 'Director of Marketing' },
                { id: 7, picture: require('../../assets/img/team/team-8.jpeg'), name: 'Shawn Edwards', post: 'Tech Lead' },
            ]
        }
    }

    render() {
        const { teamData } = this.state;
        const headerClassMod = 'header_secondary';
        return (
            <>
                <Header headerClassMod={headerClassMod} />
                <HeroPage title='ABOUT US' descr={`Createx Construction Bureau has been successfully operating in the USA construction market since 2000. We are proud to offer you quality construction and exemplary service.`} page='about-us' />
                <Achieve />
                <AboutMission />
                <History />
                <OurPartners title='Our partners' />
                <TeamCards teamData={teamData} />
                <ContactsSection />
                <Footer />
            </>
        )
    }
}

export default AboutUs;