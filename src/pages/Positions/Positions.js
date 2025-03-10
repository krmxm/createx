import { Component } from 'react';

import Header from '../../layouts/header/header';
import HeroPage from '../../layouts/hero-page/hero-page';
import PositionsContent from '../../layouts/positions-content/positions-content';
import EmployeeBenefits from '../../layouts/employee-benefits/employee-benefits';
import ContactsSection from '../../layouts/contacts-section/contacts-section';
import Footer from '../../layouts/footer/footer';

import GoTop from '../../components/to-top/to-top';

import './Positions.scss';

class Positions extends Component {
    constructor(props) {
        super(props);
        this.positionsData = [
            { id: 0, city: 'New York', time: 'Full Time', post: 'Heavy Equipment Operator' },
            { id: 1, city: 'San Francisco', time: 'Full Time', post: 'Financial Compliance Analyst' },
            { id: 2, city: 'New Jersey', time: 'Full Time', post: 'Project Manager - Buildings' },
            { id: 3, city: 'New York', time: 'Part Time', post: 'Environment Specialist' },
            { id: 4, city: 'New York', time: 'Full Time', post: 'Accountant' }

        ];
    }

    render() {
        return (
            <div className="site-container">
                <Header headerClassMod='header_secondary' />
                <HeroPage title='AVAILABLE POSITIONS' descr={`Build your career with Createx Construction Bureau.`} page='positions' />
                <PositionsContent positionsData={this.positionsData} />
                <EmployeeBenefits />
                <ContactsSection />
                <Footer />
                <GoTop scrollThreshold={500} />
            </div>
        )
    }
}

export default Positions;