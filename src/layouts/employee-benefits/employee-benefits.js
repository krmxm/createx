import { Component } from 'react';

import CardsMini from '../../components/cards-mini/cards-mini';

import { ReactComponent as Brain } from '../../assets/img/icons/brain.svg';
import { ReactComponent as Success } from '../../assets/img/icons/success.svg';
import { ReactComponent as Budget } from '../../assets/img/icons/budget.svg';


import './employee-benefits.scss';

class EmployeeBenefits extends Component {
    constructor(props) {
        super(props);
    }



    render() {
        return (
            <section className="section-offset about-mission">
                <div className="container">
                    <h2 className="title title_h2 title_h2-center about-mission__title">Employee benefits</h2>
                    <p className="large large_regular large_center large_section-descr-mb">There’s always room for talent.</p>
                    <CardsMini cards={[
                        {
                            title: 'Training',
                            descr: `Culpa nostrud commodo ea${'\u00A0'}consequat aliquip reprehenderit. Veniam velit nostrud aliquip sunt.`,
                            iconSrc: <Brain />
                        },
                        {
                            title: 'Professional Growth',
                            descr: `Anim reprehenderit sint voluptate exercitation adipisicing laborum adipisicing. Minim empor est${'\u00A0'}ea.`,
                            iconSrc: <Success />
                        },
                        {
                            title: 'Professional Growth',
                            descr: `Sit veniam aute dolore adipisicing nulla sit culpa. Minim mollit voluptate ullamco proident ea${'\u00A0'}ad.`,
                            iconSrc: <Budget />
                        }
                    ]} />
                </div>

            </section>
        )
    }
}

export default EmployeeBenefits;