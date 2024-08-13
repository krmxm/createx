import { Component } from 'react';

import './cards.scss';

const Cards = ({ cards }) => {
    const createCard = ({ title, descr, iconSrc }, index) => {
        return (
            <li key={index} className='card__item'>
                <img src={iconSrc} alt="icon" className='card__icon' />
                <h3 className="card__title">{title}</h3>
                <p className="card__descr">{descr}</p>
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