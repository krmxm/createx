import { Component } from 'react';

import './partners.scss';



class Partners extends Component {
    constructor(props) {
        super(props);
    }

    renderLogo = (arr) => {
        return arr.map((logo, index) => {
            return (
                <li key={index} className="partners__item">
                    <a href="#" className='partners__link'>
                        <img src={logo} alt={`Logo' ${index}`} className="partners__logo" />
                    </a>
                </li>
            )
        })
    }

    render() {
        const { title, subtitle, logos } = this.props;

        return (
            <div className='container partner'>
                <h2 className='title title_h2 title_h2-center partners__title'>{title}</h2>
                {subtitle ? { subtitle } : ''}
                <ul className="partners__list">
                    {this.renderLogo(logos)}
                </ul>
            </div>
        )
    }
}

export default Partners;