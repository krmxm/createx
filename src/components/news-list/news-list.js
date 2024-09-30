import NewsItem from '../news-item/news-item';

import './news-list.scss';

const NewsList = ({ newsData, classForList, classForItem }) => {
    const elements = newsData.map(item => {
        const { id, ...itemProps } = item;
        return (
            <NewsItem key={id} classForItem={classForItem} {...itemProps} />
        )
    })

    const list = () => {
        if (newsData.length === 0) {
            return (

                <p className="error">Content not found</p>
            )
        }

        return (
            <ul className={`grid news-list ${classForList}`}>
                {elements}
            </ul>
        );
    }
    return (
        list()
    )
}

export default NewsList;