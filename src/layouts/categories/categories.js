import { Component } from 'react';
import TabsButton from '../../components/tabs-button/tabs-button';
import NewsList from '../../components/news-list/news-list';


import { ReactComponent as LoadIcon } from '../../assets/img/icons/load.svg';

import './categories.scss';


class Categories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabsData: [
                { id: 0, name: 'All News' },
                { id: 1, name: 'Company News'},
                { id: 2, name: 'Innovation'},
                { id: 3, name: 'Industry News' },
                { id: 4, name: 'Expert Tips' },
                { id: 5, name: 'Marketing' }
            ],
            newsData: [
                { id: 0, newsArticleImg: require('../../assets/img/news/news-1.png'), newsArticleLinkText: 'How to Build Climate Change-Resilient Infrastructure', newsArticleMetaLinkText: 'Industry News', newsArticleMetaTime: 'June 24, 2020', newsArticleMetaComments: '4', recentArticleDescr: 'Ipsum aliquet nisi, hendrerit rhoncus quam tortor, maecenas faucibus. Tincidunt aliquet sit vel, venenatis nulla. Integer bibendum turpis convallis...' },
                { id: 1, newsArticleImg: require('../../assets/img/news/news-2.png'), newsArticleLinkText: 'How Construction Can Help Itself', newsArticleMetaLinkText: 'Innovation', newsArticleMetaTime: 'June 12, 2020', newsArticleMetaComments: 'No', recentArticleDescr: 'Porta habitant vitae quam interdum. Leo viverra non volutpat rhoncus placerat vitae scelerisque. Rhoncus augue faucibus maecenas lacus Porta habitant vitae quam interdum. Leo viverra non volutpat rhoncus placerat vitae scelerisque. Rhoncus augue faucibus maecenas lacus' },
                { id: 2, newsArticleImg: require('../../assets/img/news/news-3.png'), newsArticleLinkText: 'The Difference Between a Digger and an Excavator', newsArticleMetaLinkText: 'Expert Tips', newsArticleMetaTime: 'May 16, 2020', newsArticleMetaComments: 'No', recentArticleDescr: 'Cras est nisi purus velit facilisi vitae, dolor. Lorem scelerisque integer duis et nulla lobortis cursus. Viverra erat sollicitudin praesent viverra...' },
                { id: 3, newsArticleImg: require('../../assets/img/news/news-4.png'), newsArticleLinkText: 'Building Construction Hand Tools', newsArticleMetaLinkText: 'Expert Tips', newsArticleMetaTime: 'February 25, 2020', newsArticleMetaComments: '1', recentArticleDescr: 'Tellus quis aliquet volutpat nunc pulvinar donec sed sapien. Vitae elit id dolor, tristique massa. Fames lobortis orci rutrum bibendum integer...' },
                { id: 4, newsArticleImg: require('../../assets/img/news/news-5.png'), newsArticleLinkText: 'Top 10 Construction Trends', newsArticleMetaLinkText: 'Industry News', newsArticleMetaTime: 'January 14, 2020', newsArticleMetaComments: 'No', recentArticleDescr: 'Dignissim sed enim, eleifend morbi condimentum. Congue id quis vulputate dignissim eget. Ac ullamcorper nunc habitasse enim interdum platea...' },
                { id: 5, newsArticleImg: require('../../assets/img/news/news-6.png'), newsArticleLinkText: 'Types of Flooring Materials', newsArticleMetaLinkText: 'Company News', newsArticleMetaTime: 'December 1, 2019', newsArticleMetaComments: 'No', recentArticleDescr: 'Maecenas donec lacinia nunc, quam sit magnis mauris. Neque bibendum et mauris, aenean. Vel arcu amet in sem parturient  integer duis et nulla...' },
                { id: 6, newsArticleImg: require('../../assets/img/news/news-1.png'), newsArticleLinkText: 'How to Build Climate Change-Resilient Infrastructure', newsArticleMetaLinkText: 'Industry News', newsArticleMetaTime: 'June 24, 2020', newsArticleMetaComments: '4', recentArticleDescr: 'Ipsum aliquet nisi, hendrerit rhoncus quam tortor, maecenas faucibus. Tincidunt aliquet sit vel, venenatis nulla. Integer bibendum turpis convallis...' },
                { id: 7, newsArticleImg: require('../../assets/img/news/news-1.png'), newsArticleLinkText: 'How to Build Climate Change-Resilient Infrastructure', newsArticleMetaLinkText: 'Industry News', newsArticleMetaTime: 'June 24, 2020', newsArticleMetaComments: '4', recentArticleDescr: 'Ipsum aliquet nisi, hendrerit rhoncus quam tortor, maecenas faucibus. Tincidunt aliquet sit vel, venenatis nulla. Integer bibendum turpis convallis...' },
                { id: 8, newsArticleImg: require('../../assets/img/news/news-1.png'), newsArticleLinkText: 'How to Build Climate Change-Resilient Infrastructure', newsArticleMetaLinkText: 'Industry News', newsArticleMetaTime: 'June 24, 2020', newsArticleMetaComments: '4', recentArticleDescr: 'Ipsum aliquet nisi, hendrerit rhoncus quam tortor, maecenas faucibus. Tincidunt aliquet sit vel, venenatis nulla. Integer bibendum turpis convallis...' },
                { id: 9, newsArticleImg: require('../../assets/img/news/news-1.png'), newsArticleLinkText: 'How to Build Climate Change-Resilient Infrastructure', newsArticleMetaLinkText: 'Industry News', newsArticleMetaTime: 'June 24, 2020', newsArticleMetaComments: '4', recentArticleDescr: 'Ipsum aliquet nisi, hendrerit rhoncus quam tortor, maecenas faucibus. Tincidunt aliquet sit vel, venenatis nulla. Integer bibendum turpis convallis...' },
                { id: 10, newsArticleImg: require('../../assets/img/news/news-1.png'), newsArticleLinkText: 'How to Build Climate Change-Resilient Infrastructure', newsArticleMetaLinkText: 'Industry News', newsArticleMetaTime: 'June 24, 2020', newsArticleMetaComments: '4', recentArticleDescr: 'Ipsum aliquet nisi, hendrerit rhoncus quam tortor, maecenas faucibus. Tincidunt aliquet sit vel, venenatis nulla. Integer bibendum turpis convallis...' },
                { id: 11, newsArticleImg: require('../../assets/img/news/news-1.png'), newsArticleLinkText: 'How to Build Climate Change-Resilient Infrastructure', newsArticleMetaLinkText: 'Industry News', newsArticleMetaTime: 'June 24, 2020', newsArticleMetaComments: '4', recentArticleDescr: 'Ipsum aliquet nisi, hendrerit rhoncus quam tortor, maecenas faucibus. Tincidunt aliquet sit vel, venenatis nulla. Integer bibendum turpis convallis...' },
                { id: 12, newsArticleImg: require('../../assets/img/news/news-1.png'), newsArticleLinkText: 'How to Build Climate Change-Resilient Infrastructure', newsArticleMetaLinkText: 'Industry News', newsArticleMetaTime: 'June 24, 2020', newsArticleMetaComments: '4', recentArticleDescr: 'Ipsum aliquet nisi, hendrerit rhoncus quam tortor, maecenas faucibus. Tincidunt aliquet sit vel, venenatis nulla. Integer bibendum turpis convallis...' },
                { id: 13, newsArticleImg: require('../../assets/img/news/news-1.png'), newsArticleLinkText: 'How to Build Climate Change-Resilient Infrastructure', newsArticleMetaLinkText: 'Industry News', newsArticleMetaTime: 'June 24, 2020', newsArticleMetaComments: '4', recentArticleDescr: 'Ipsum aliquet nisi, hendrerit rhoncus quam tortor, maecenas faucibus. Tincidunt aliquet sit vel, venenatis nulla. Integer bibendum turpis convallis...' },
                { id: 14, newsArticleImg: require('../../assets/img/news/news-1.png'), newsArticleLinkText: 'How to Build Climate Change-Resilient Infrastructure', newsArticleMetaLinkText: 'Industry News', newsArticleMetaTime: 'June 24, 2020', newsArticleMetaComments: '4', recentArticleDescr: 'Ipsum aliquet nisi, hendrerit rhoncus quam tortor, maecenas faucibus. Tincidunt aliquet sit vel, venenatis nulla. Integer bibendum turpis convallis...' }
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
        const { tabsData, newsData, filter, displayedCardsCount } = this.state;
        // const filteredCards = this.filterCard(cardsData, filter);
        // const visibleCards = filteredCards.slice(0, displayedCardsCount);
        return (
            <section className="categories">
                <div className="container">
                    <h2 className='title title_h2 title_h2-center categories__title'>Categories</h2 >
                    <TabsButton tabsData={tabsData} filter={filter} onFilterSelect={this.onFilterSelect} classForTabsList='news-nav' classForTabsItem='news-nav__item' classForTabsBtn='news-nav__btn'/>
                    <NewsList newsData={newsData} classForList='categories__list' classForItem='categories__item' />
                    {/* {displayedCardsCount < filteredCards.length && (
                        <div className="centered">
                            <button onClick={this.loadMoreCards} className="btn-reset portfolio-more">
                                <LoadIcon />
                                <p className="base vase_bold">Load more</p>
                            </button>
                        </div>
                    )} */}
                </div>
            </section>
        )
    }
}

export default Categories;