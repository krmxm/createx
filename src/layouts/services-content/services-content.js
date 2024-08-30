import { Component } from 'react';

import ServicesImg from '../../assets/img/services-content/services-content-1.jpeg';



import './services-content.scss';

class ServicesContent extends Component {
    constructor(props) {
        super(props);
    }

    renderLi = (liArr) => {
        return liArr.map((li, index) => {
            <div className={`services__item ${index % 2 === 0 ? '' : 'services__item_revers'}`}>
                <div className="services__img">
                    <img src="" alt="services picture" />
                </div>
                <div className="services__info">
                    <div className="services__title"></div>
                    <div className="services__descr"></div>
                    <button></button>
                </div>
            </div>
        })
    }

    render() {
        return (
            <div className="services">
                <div className="container">
                    <h2 className="visually-hidden">Services content</h2>

                    <ul className="services__list">
                        <li className="services__item">
                            <div className="services__imgs">
                                <img src={ServicesImg} alt="services" />
                            </div>
                            <div className="services__info">
                                <div className="title title_h2 services__title">Construction</div>
                                <p className="base base_regular services__descr">Sapien, feugiat faucibus orci arcu, vulputate. Tristique varius consectetur vulputate arcu, scelerisque nisi, nibh. Enim semper id sodales ultricies sed ut ut augue. Mattis habitant venenatis, gravida posuere massa ac interdum. Eget aliquam dignissim ut vestibulum. </p>
                                <button ></button>
                            </div>
                        </li>
                        <li className="services__item services__item_revers">
                            <div className="services__imgs">
                                <img src={ServicesImg} alt="services" />
                            </div>
                            <div className="services__info">
                                <div className="title title_h2 services__title">Construction</div>
                                <p className="base base_regular services__descr">Sapien, feugiat faucibus orci arcu, vulputate. Tristique varius consectetur vulputate arcu, scelerisque nisi, nibh. Enim semper id sodales ultricies sed ut ut augue. Mattis habitant venenatis, gravida posuere massa ac interdum. Eget aliquam dignissim ut vestibulum. </p>
                                <button ></button>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default ServicesContent;