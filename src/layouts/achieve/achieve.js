import { Component } from 'react';
import { ReactComponent as Achieve1 } from '../../assets/img/icons/quality.svg';
import { ReactComponent as Achieve2 } from '../../assets/img/sprite/repairs.svg';
import { ReactComponent as Achieve3 } from '../../assets/img/icons/benefits-2.svg';
import { ReactComponent as Achieve4 } from '../../assets/img/sprite/interior-design.svg';

import './achieve.scss';

class Achieve extends Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <section className="achieve">
                <h2 class="visually-hidden">Our Achievements</h2>
                <div class="container">
                <ul class="achieve__list grid">
                    <li class="achieve__item achieve__item--reccom">
                        <div className="achieve__icon">
                            <Achieve1 />
                        </div>
                        <div class="title title_h2 achieve__value">60%</div>
                        <div class="small small_regular achieve__text">Clients on the recommendation of friends</div>
                    </li>
                    <li class="achieve__item achieve__item--renov">
                        <div className="achieve__icon">
                            <Achieve2 />
                        </div>
                        <div class="title title_h2 achieve__value">2400+</div>
                        <div class="small small_regular achieve__text">Apartments renovated</div>
                    </li>
                    <li class="achieve__item achieve__item--spec">
                        <div className="achieve__icon">
                            <Achieve3 />
                        </div>
                        <div class="title title_h2 achieve__value">670</div>
                        <div class="small small_regular achieve__text">Qualified specialists</div>
                    </li>
                    <li class="achieve__item achieve__item--finish">
                        <div className="achieve__icon">
                            <Achieve4 />
                        </div>
                        <div class="title title_h2 achieve__value">150000m2</div>
                        <div class="small small_regular achieve__text">Finishing work was carried out</div>
                    </li>
                </ul>
                </div>
            </section>
        )
    }
}

export default Achieve;