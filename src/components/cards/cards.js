import { Component } from 'react';

import './cards.scss';

const Cards = ({ cards }, theme) => {
    const createCard = ({ title, descr, iconSrc }, index) => {
        return (
            <li key={index} className='card__item'>
                <img src={iconSrc} alt="icon" className='card__icon' />
                <h3 className={`${theme ? ' card__title card__title_light' : 'card__title'}
                lead lead_bold`}>{title}</h3>
                <p className="base base_regular">{descr}</p>
            </li>
        )
    }

    return (
        <ul className='card__list grid'>
            {cards.map((card, index) => createCard(card, index))}
        </ul>
    )
}

export default Cards;