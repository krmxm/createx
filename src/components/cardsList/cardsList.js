import CardsItem from '../cardsItem/cardsItem';

import './cardsList.scss';

const CardsList = ({ cardsData }) => {
    const elements = cardsData.map(item => {
        const { id, ...itemProps } = item;
        return (
            <CardsItem key={id} {...itemProps} />
        )
    })

    const list = () => {
        if (cardsData.length === 0) {
            return (

                <p className="error">Content not found</p>
            )
        }

        return (
            <ul className='coffeeList grid grid_cards'>
                {elements}
            </ul>
        );
    }
    return (
        list()
    )
}

export default CardsList;