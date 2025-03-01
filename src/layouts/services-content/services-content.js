import { Component } from 'react';
import { NavLink } from 'react-router-dom';


import ServicesImg from '../../assets/img/services-content/services-content-1.jpeg';



import './services-content.scss';

class ServicesContent extends Component {
    constructor(props) {
        super(props);
    }

    renderLi = (liArr) => {
        return liArr.map(({ id, servicesImg, title, descr }, index) => {
            return (
                <li key={id} className={index % 2 === 0 ? 'services__item grid' : 'services__item services__item_revers grid    '}>

                    
                    <div className={index % 2 === 0 ? 'services__img services__img_mr' : 'services__img services__img_ml'}>
                        <img src={servicesImg} alt="services" />
                    </div>
                    <div className="services__info">
                        <div className="title title_h3 services__title">{title}</div>
                        <p className="base base_regular services__descr">{descr} </p>
                        <NavLink to="/services/:id" >
                            <button className='btn btn_size-regular btn_theme-outline'>Learn more</button>
                        </NavLink>
                    </div>
                </li>
            )
        })
    }

    render() {
        return (
            <div className="services section-offset">
                <div className="container">
                    <h2 className="visually-hidden">Services content</h2>

                    <ul className="services__list">
                        {this.renderLi(this.props.servicesContent)}
                    </ul>
                </div>
            </div>
        )
    }
}

export default ServicesContent;