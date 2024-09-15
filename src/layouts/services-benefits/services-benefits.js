import { Component } from 'react';
import Forms from '../../components/forms/forms';

import CardsMini from '../../components/cards-mini/cards-mini';

import benefits1 from '../../assets/img/icons/benefits-1.svg';
import benefits2 from '../../assets/img/icons/benefits-2.svg';
import benefits3 from '../../assets/img/icons/benefits-3.svg';

import './services-benefits.scss';

class Benefits extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className="services-benefits section-offset">
                <div className="container">
                    <h2 className="title title_h2 title_h2-center services-benefits__title">Our benefits</h2>
                    <p className="large large_regular large_center large_section-descr-mb services-benefits__descr">Our mission is to set the highest standards for construction sphere.</p>
                    <CardsMini cards={[
                        {
                            title: 'Fixed Terms & Cost',
                            descr: `Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam velit nostrud aliquip sunt.`,
                            iconSrc: benefits1
                        },
                        {
                            title: 'Qualified Workers',
                            descr: `Anim reprehenderit sint voluptate exercitation adipisicing laborum adipisicing. Minim empor est ea.`,
                            iconSrc: benefits2
                        },
                        {
                            title: 'Supervision & Control',
                            descr: `Sit veniam aute dolore adipisicing nulla sit culpa. Minim mollit voluptate ullamco proident ea ad.`,
                            iconSrc: benefits3
                        }
                    ]} theme='light' />
                    <div className="centered services-benefits__centered">
                        <button className="btn-reset btn btn_size-large btn_theme-primary services-benefits__btn">Discuss a project</button>
                    </div>
                </div>

            </section>
        )
    }
}

export default Benefits;