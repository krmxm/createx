import { Component } from 'react';

import WeOfferImg from '../../assets/img/we-offer.jpeg';

import './we-offer.scss';

class WeOffer extends Component {
    constructor(props) {
        super(props);
    }

    onAccordion = () => {

    }

    render() {
        return (
            <section className="we-offer">
                <div className="container we-offer__container grid">
                    <div className="we-offer__img">
                        <img src={WeOfferImg} alt="we-offer" />
                    </div>
                    <div className="we-offer__content">
                        <h2 className="title title_h2 we-offer__title">We offer</h2>
                        <ul className="accordion__list we-offer__accordion">
                            <li onClick={this.onAccordion} className="accordion__item">
                                <button className='btn-reset accordion__btn'>
                                    <span className="title title_h4 accordion__title">Interior design of apartments</span>
                                    <span className="accordion__icon"></span>
                                </button>
                                <div className="accordion__content">
                                    <p className='base base_regular'>Adipiscing nunc arcu enim elit mattis eu placerat proin. Imperdiet elementum faucibus dignissim purus. Fusce parturient diam magna ullamcorper morbi semper massa ac facilisis.</p>
                                </div>
                            </li>
                            <li className="accordion__item"></li>
                        </ul>
                    </div>
                </div>
            </section>
        )
    }
}

export default WeOffer;