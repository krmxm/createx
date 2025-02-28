import { Component } from 'react';

import Header from '../../layouts/header/header';
import HeroPage from '../../layouts/hero-page/hero-page';
import ProjectGoal from '../../layouts/project-goal/project-goal';
import Decisions from '../../layouts/decisions/decisions';
import SimilarProjects from '../../layouts/similar-project/similar-projects';
import ContactsSection from '../../layouts/contacts-section/contacts-section';
import Footer from '../../layouts/footer/footer';

import GoTop from '../../components/to-top/to-top';

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
                <HeroPage title='Modern Cottage' page='some-project' titleMb='mbProject' slider />
                <ProjectGoal />
                <Decisions />
                <SimilarProjects />
                <ContactsSection />
                <Footer />
                <GoTop scrollThreshold={500} />
            </>
        )
    }
}

export default SomeProject;