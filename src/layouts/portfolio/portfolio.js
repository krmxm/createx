import { Component } from 'react';
import TabsButton from '../../components/tabsButton/tabsButton';

import { ReactComponent as TabIcon1 } from '../../assets/img/sprite/house.svg';
import { ReactComponent as TabIcon2 } from '../../assets/img/sprite/construction.svg';
import { ReactComponent as TabIcon3 } from '../../assets/img/sprite/project-development.svg';
import { ReactComponent as TabIcon4 } from '../../assets/img/sprite/interior-design.svg';
import { ReactComponent as TabIcon5 } from '../../assets/img/sprite/repairs.svg';


class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabsData: [
                { id: 0, name: 'All Projects', icon: <TabIcon1 /> },
                { id: 1, name: 'Construction', icon: <TabIcon2 /> },
                { id: 2, name: 'Project Development', icon: <TabIcon3 /> },
                { id: 3, name: 'Interior Design', icon: <TabIcon4 /> },
                { id: 4, name: 'Repairs', icon: <TabIcon5 /> }
            ],
            contentForTabs: [
                { imgProduct: 'solimo', nameProduct: 'Solimo Coffee Beans 2 kg', country: 'Kenya', price: '10.73', best: true, id: '1' },
                { imgProduct: 'presto', nameProduct: 'Presto Coffee Beans 1 kg', country: 'Brazil', price: '15.99', best: true, id: '2' },
                { imgProduct: 'aromistico', nameProduct: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: '6.99', best: true, id: '3' },
                { imgProduct: 'presto', nameProduct: 'AROMISTICO Coffee 1 kg', country: 'Columbia', price: '6.99', best: false, id: '4' },
                { imgProduct: 'aromistico', nameProduct: 'AROMISTICO Coffee 1 kg', country: 'Kenya', price: '6.99', best: false, id: '5' },
                { imgProduct: 'solimo', nameProduct: 'AROMISTICO Coffee 1 kg', country: 'Columbia', price: '6.99', best: false, id: '6' }
            ],
            filter: 'All Projects'
        }
    }

    onFilterSelect = (filter) => {
        this.setState({ filter });
    }

    filterPost = (items, filter) => {
        switch (filter) {
            case 'Brazil':
                return items.filter(item => item.country === 'Brazil');
            case 'Kenya':
                return items.filter(item => item.country === 'Kenya');
            case 'Columbia':
                return items.filter(item => item.country === 'Columbia');
            default:
                return items;
        }
    }

    render() {
        const { tabsData, filter } = this.state;
        return (
            <section className="portfolio">
                <div className="container">
                    <TabsButton tabsData={tabsData} filter={filter} onFilterSelect={this.onFilterSelect} classForTabsList='portfolio-tabs-nav' classForTabsItem='portfolio-tabs-nav__item' />

                </div>
            </section>
        )
    }
}

export default Portfolio;