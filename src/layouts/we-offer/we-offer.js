import { Component, createRef } from 'react';

import WeOfferImg from '../../assets/img/we-offer.jpeg';

import './we-offer.scss';

class WeOffer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: null,
            maxHeight: 0
        };
        this.contentRefs = [createRef(), createRef()];
    }

    componentDidMount() {
        this.updateMaxHeight();
    }

    updateMaxHeight = () => {
        const maxHeight = Math.max(
            ...this.contentRefs.map(ref => ref.current ? ref.current.scrollHeight : 0)
        );
        this.setState({ maxHeight });
    }

    onAccordion = (index) => {
        this.setState((prevState) => ({
            activeIndex: prevState.activeIndex === index ? null : index,
        }));
    }

    render() {
        const { activeIndex, maxHeight } = this.state;
        return (
            <section className="we-offer section-offset">
                <div className="container we-offer__container grid">
                    <div className="we-offer__img">
                        <img src={WeOfferImg} alt="we-offer" />
                    </div>F
                    <div className="we-offer__content">
                        <h2 className="title title_h2 we-offer__title">We offer</h2>
                        <ul className="accordion we-offer__accordion">
                            <li onClick={() => this.onAccordion(0)} className={`accordion__item ${activeIndex === 0 ? 'is-open' : ''}`}>
                                <button className='btn-reset accordion__btn'>
                                    <span className="title title_h4 accordion__title">Interior design of apartments</span>
                                    <span className="accordion__icon"></span>
                                </button>
                                <div
                                    className="accordion__content"
                                    ref={this.contentRefs[0]}
                                    style={{ maxHeight: activeIndex === 0 ? `${maxHeight}px` : '0' }}>
                                    <p className='base base_regular'>Adipiscing nunc arcu enim elit mattis eu placerat proin. Imperdiet elementum faucibus dignissim purus. Fusce parturient diam magna ullamcorper morbi semper massa ac facilisis.</p>
                                </div>
                            </li>
                            <li className="accordion__item"></li>
                            <li onClick={() => this.onAccordion(1)} className={`accordion__item ${activeIndex === 1 ? 'is-open' : ''}`}>
                                <button className='btn-reset accordion__btn'>
                                    <span className="title title_h4 accordion__title">Interior design of private houses</span>
                                    <span className="accordion__icon"></span>
                                </button>
                                <div
                                    className="accordion__content"
                                    ref={this.contentRefs[1]}
                                    style={{ maxHeight: activeIndex === 1 ? `${maxHeight}px` : '0' }}>
                                    <p className='base base_regular'>Adipiscing nunc arcu enim elit mattis eu placerat proin. Imperdiet elementum faucibus dignissim purus. Fusce parturient diam magna ullamcorper morbi semper massa ac facilisis.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        )
    }
}

export default WeOffer;