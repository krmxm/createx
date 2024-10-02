import React, { Component } from 'react';
import LearnMore from '../../components/learn-more/learn-more';

import './recent-news.scss';

class RecentNews extends Component {
    constructor(props) {
        super(props);
    }

    formatData = (dataString) => {
        const data = new Date(dataString);

        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return data.toLocaleDateString('en-US', options);
    }

    compressLongString = (string) => {
        if (string.length > 168) {
            return `${string.slice(0, 168)}...`;
        }

        return string;
    }

    onRenderArticle = (news) => {
        return news.map(({ id, recentArticleImg, recentArticleLinkText, recentArticleMetaLinkText, recentArticleMetaTime, recentArticleMetaComments, recentArticleDescr }, index) => {
            if (index === 0) {
                return (
                    <li key={id} className="recent-news__item">
                        <article className="recent-article">
                            <img className='recent-article__img' src={recentArticleImg} alt="img news" />
                            <div className="recent-article__text">
                                <h3 className="lead lead_bold recent-article__title">
                                    <a href="#" className='recent-article__link'>{recentArticleLinkText}</a>
                                </h3>
                                <div className="recent-article__meta article-meta small small_regular">
                                    <a className='article-meta__item' href="#">{recentArticleMetaLinkText}</a>
                                    <time className='article-meta__item' >{this.formatData(recentArticleMetaTime)}</time>
                                    <span className='article-meta__item article-meta__item_comments'>{recentArticleMetaComments} comments</span>
                                </div>
                                <p className="recent-article__descr base base_regular">{this.compressLongString(recentArticleDescr)}</p>
                            </div>
                        </article>

                    </li>
                )
            } else if (0 < index && index <= 2) {
                return (
                    <li key={id} className="recent-news__item">
                        <article className="recent-article recent-article_small">
                            <img className='recent-article__img' src={recentArticleImg} alt="img news" />
                            <div className="recent-article__text">
                                <h3 className="lead lead_bold recent-article__title">
                                    <a href="#" className='recent-article__link'>{recentArticleLinkText}</a>
                                </h3>
                                <div className="recent-article__meta article-meta small small_regular">
                                    <a className='article-meta__item' href="#">{recentArticleMetaLinkText}</a>
                                    <time className='article-meta__item' >{this.formatData(recentArticleMetaTime)}</time>
                                    <span className='article-meta__item article-meta__item_comments'>{recentArticleMetaComments} comments</span>
                                </div>
                            </div>
                        </article>

                    </li>
                )
            } else {
                return null;
            }

        })
    }

    render() {
        const { recentNews } = this.props;
        return (
            <section className="recent-news section-offset">
                <div className="container">
                    <h2 className='title title_h2 title_h2-center recent-news__title'>Recent news</h2 >
                    <ul className="recent-news__list grid">
                        {this.onRenderArticle(recentNews)}
                    </ul>
                    <LearnMore title='Explore all our news posts' textBtn='View all news' classLearnMore='recent-news__learn' />
                </div>
            </section>
        )
    }
}

export default RecentNews;