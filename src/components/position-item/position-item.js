import './position-item.scss';

const PositionItem = ({ city, time, post }, index) => {

    return (
        <li key={index}>
            <article className="position-item">
                <div className="position-item__left">
                    <div className="position-item__meta">
                        <span className="small small_regular position-item__city">{city}</span>
                        <span className="small small_regular position-item__time">{time}</span>
                    </div>
                    <h3 className="lead lead_bold position-item__title">{post}</h3>
                </div>
                <a href="#" className="btn-reset btn btn_size-regular btn_theme-outline position-item__link">Apply now</a>
            </article>
        </li>
    )
}

export default PositionItem;