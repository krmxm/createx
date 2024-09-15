import './cardsItem.scss';

const CardsItem = ({ title, descr, picture }, index) => {

    return (
        <li
            key={index}
            className='cards-item'
        >
            <a href="#" className="cards-item__link">
                <div className="cards-item__img">
                    <img src={picture} alt="some cards" />
                </div>
                <div className="cards-item__content">
                    <div className="cards-item__text">
                        <h3 className='lead lead_bold'>{title}</h3>
                        <span className='small regular'>{descr}</span>
                    </div>
                    <button className='btn-reset btn btn_size-regular btn_theme-outline cards-item__btn'>View Project</button>

                </div>

            </a>
        </li>
    )
}

export default CardsItem;