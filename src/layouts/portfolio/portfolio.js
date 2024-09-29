import { Component } from 'react';
import TabsButton from '../../components/tabs-button/tabs-button';
import CardsList from '../../components/cards-list/cards-list';

import { ReactComponent as TabIcon1 } from '../../assets/img/sprite/house.svg';
import { ReactComponent as TabIcon2 } from '../../assets/img/sprite/construction.svg';
import { ReactComponent as TabIcon3 } from '../../assets/img/sprite/project-development.svg';
import { ReactComponent as TabIcon4 } from '../../assets/img/sprite/interior-design.svg';
import { ReactComponent as TabIcon5 } from '../../assets/img/sprite/repairs.svg';

import { ReactComponent as LoadIcon } from '../../assets/img/icons/load.svg';

import './portfolio.scss';


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
            cardsData: [
                { id: 1, picture: require('../../assets/img/portfolio/portfolio-1.jpeg'), title: 'Cubes Building', descr: 'Business Centers', project: 'Construction' },
                { id: 2, picture: require('../../assets/img/portfolio/portfolio-2.jpeg'), title: 'Modern Cottage', descr: 'Private houses', project: 'Project Development' },
                { id: 3, picture: require('../../assets/img/portfolio/portfolio-3.jpeg'), title: 'Luxury Beach House', descr: 'Private houses', project: 'Project Development' },
                { id: 4, picture: require('../../assets/img/portfolio/portfolio-4.jpeg'), title: 'Modern Double Bedroom', descr: 'Apartments & flats', project: 'Interior Design' },
                { id: 5, picture: require('../../assets/img/portfolio/portfolio-5.jpeg'), title: 'Kids Bedroom With Decorations', descr: 'Apartments & flats', project: 'Interior Design' },
                { id: 6, picture: require('../../assets/img/portfolio/portfolio-6.jpeg'), title: 'The Pencil Building', descr: 'Stores & Malls', project: 'Construction' },
                { id: 7, picture: require('../../assets/img/portfolio/portfolio-7.jpeg'), title: 'Red Finger Building', descr: 'Business Centers', project: 'Constructios' },
                { id: 8, picture: require('../../assets/img/portfolio/portfolio-8.jpeg'), title: 'Scandinavian Style Interior', descr: 'Private houses', project: 'Repairs' },
                { id: 9, picture: require('../../assets/img/portfolio/portfolio-9.jpeg'), title: 'Brown and Gray Painted House', descr: 'Private houses', project: 'Repairs' },
                { id: 10, picture: require('../../assets/img/portfolio/portfolio-1.jpeg'), title: 'Red Finger Building', descr: 'Business Centers', project: 'Construction' },
                { id: 11, picture: require('../../assets/img/portfolio/portfolio-2.jpeg'), title: 'Cubes Building', descr: 'Business Centers', project: 'Project Development' },
                { id: 12, picture: require('../../assets/img/portfolio/portfolio-3.jpeg'), title: 'The Pencil Building', descr: 'Stores & Malls', project: 'Project Development' },
                { id: 13, picture: require('../../assets/img/portfolio/portfolio-4.jpeg'), title: 'The Pencil Building', descr: 'Stores & Malls', project: 'Interior Design' },
                { id: 14, picture: require('../../assets/img/portfolio/portfolio-5.jpeg'), title: 'The Pencil Building', descr: 'Stores & Malls', project: 'Interior Design' },
                { id: 15, picture: require('../../assets/img/portfolio/portfolio-6.jpeg'), title: 'The Pencil Building', descr: 'Stores & Malls', project: 'Construction' }
            ],
            filter: 'All Projects',
            displayedCardsCount: 9
        }
    }

    onFilterSelect = (filter) => {
        this.setState({ filter, displayedCardsCount: 9 });
    };

    filterCard = (items, filter) => {
        switch (filter) {
            case 'Construction':
                return items.filter(item => item.project === 'Construction');
            case 'Project Development':
                return items.filter(item => item.project === 'Project Development');
            case 'Interior Design':
                return items.filter(item => item.project === 'Interior Design');
            case 'Repairs':
                return items.filter(item => item.project === 'Repairs');
            default:
                return items;
        }
    }

    loadMoreCards = () => {
        this.setState((prevState) => ({
            displayedCardsCount: prevState.displayedCardsCount + 3 // Подгружаем еще 3 карточки
        }));
    };

    render() {
        const { tabsData, cardsData, filter, displayedCardsCount } = this.state;
        const filteredCards = this.filterCard(cardsData, filter);
        const visibleCards = filteredCards.slice(0, displayedCardsCount);
        return (
            <section className="portfolio">
                <div className="container">
                    <TabsButton tabsData={tabsData} filter={filter} onFilterSelect={this.onFilterSelect} classForTabsList='portfolio-tabs-nav' classForTabsItem='portfolio-tabs-nav__item' />
                    <CardsList cardsData={visibleCards} classForCards='portfolio-tabs' />
                    {displayedCardsCount < filteredCards.length && (
                        <div className="centered">
                            <button onClick={this.loadMoreCards} className="btn-reset portfolio-more">
                                <LoadIcon />
                                <p className="base vase_bold">Load more</p>
                            </button>
                        </div>
                    )}
                </div>
            </section>
        )
    }
}

export default Portfolio;