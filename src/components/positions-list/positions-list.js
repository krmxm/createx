import PositionItem from '../position-item/position-item';

import './positions-list.scss';

const PositionsList = ({ positionsData }) => {
    const elements = positionsData.map(item => {
        const { id, ...itemProps } = item;
        return (
            <PositionItem key={id} {...itemProps} />
        )
    })

    const list = () => {
        if (positionsData.length === 0) {
            return (

                <p className="error">Content not found</p>
            )
        }

        return (
            <ul className='positions-list'>
                {elements}
            </ul>
        );
    }
    return (
        list()
    )
}

export default PositionsList;