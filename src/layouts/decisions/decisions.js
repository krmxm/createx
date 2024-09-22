import React, { Component } from 'react';

import './decisions.scss';

import DecisionsImg from '../../assets/img/decisions-img.jpeg';

class Decisions extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className="decisions">
                <div className="container grid">
                    <div className="decisions__left">
                        <img src={DecisionsImg} alt="Decisions" className="decisions__img" />
                    </div>
                    <div className="decisions__right">
                        <h2 className="title title_h2 decisions__title">Constructive decisions</h2>
                        <ul className="decisions__list">
                            <li className="base bade_regular decisions__item">Vitae ultrices ornare eu sed in est quisque duis id.</li>
                            <li className="base bade_regular decisions__item">A fermentum in morbi pretium aliquam adipiscing donec tempus.</li>
                            <li className="base bade_regular decisions__item">Mauris odio pellentesque commodo, diam.</li>
                            <li className="base bade_regular decisions__item">Fermentum vestibulum est fermentum, egestas gravida scelerisque quis.</li>
                            <li className="base bade_regular decisions__item">At pharetra libero blandit risus, fringilla sed commodo diam.</li>
                            <li className="base bade_regular decisions__item">Integer ultricies viverra ut enim viverra ut.</li>
                        </ul>
                    </div>
                </div>
            </section>
        )
    }
}

export default Decisions;