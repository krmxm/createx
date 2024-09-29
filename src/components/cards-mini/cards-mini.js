import { Component } from 'react';

import './cards-mini.scss';

const CardsMini = ({ cards, theme }) => {
    const createCard = ({ title, descr, iconSrc }, index) => {
        console.log(theme);
        return (
            <li key={index} className='card__item'>
                {iconSrc}
                <h3 className={`${theme === 'black' ? ' card__title card__title_light' : 'card__title'}
                lead lead_bold`}>{title}</h3>
                <p className="base base_regular">{descr}</p>
            </li>
        )
    }

    return (
        <ul className='card__list grid'>
            {cards.map((card, index,) => createCard(card, index))}
        </ul>
    )
}

export default CardsMini;