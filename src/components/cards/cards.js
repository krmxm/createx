import { Component } from 'react';

import './cards.scss';

const Cards = ({ cards }) => {
    const creatCard = ({ title, descr, iconSrc }) => {
        return (
            <li className='card__item'>
                <img src={iconSrc} alt="icon" className='card__icon' />
                <h3 className="card__title">{title}</h3>
                <p className="card__descr">{descr}</p>
            </li>
        )
    }

    return (
        <ul className='card__list grid'>
            {cards.map(card => creatCard(card))}
        </ul>
    )
}

export default Cards;