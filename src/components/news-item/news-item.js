import './news-item.scss';

const NewsItem = ({ newsArticleImg, newsArticleLinkText, newsArticleMetaLinkText, newsArticleMetaTime, newsArticleMetaComments, recentArticleDescr, key, classForItem }) => {

    const formatData = (dataString) => {
        const data = new Date(dataString);

        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return data.toLocaleDateString('en-US', options);
    }

    const compressLongString = (string) => {
        if (string.length > 168) {
            return `${string.slice(0, 168)}...`;
        }

        return string;
    }

    return (
        <li
        key={key}
        className={`news-item ${classForItem}`}>
        <article className="news-article">
            <img className='news-article__img' src={newsArticleImg} alt="img news" />
            <div className="news-article__text">
                <h3 className="lead lead_bold news-article__title">
                    <a href="#" className='news-article__link'>{newsArticleLinkText}</a>
                </h3>
                <div className="news-article__meta article-meta small small_regular">
                    <a className='article-meta__item' href="#">{newsArticleMetaLinkText}</a>
                    <time className='article-meta__item' >{formatData(newsArticleMetaTime)}</time>
                    <span className='article-meta__item article-meta__item_comments'>{newsArticleMetaComments} comments</span>
                </div>
                <p className="news-article__descr base base_regular">{compressLongString(recentArticleDescr)}</p>
            </div>
        </article>

    </li>
    )
}

export default NewsItem;