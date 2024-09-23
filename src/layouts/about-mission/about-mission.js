import { Component } from 'react';
import Forms from '../../components/forms/forms';

import CardsMini from '../../components/cards-mini/cards-mini';

import { ReactComponent as Quality } from '../../assets/img/icons/quality.svg';
import { ReactComponent as Safety } from '../../assets/img/icons/safety.svg';
import { ReactComponent as Comfort } from '../../assets/img/icons/comfort.svg';


import './about-mission.scss';

class AboutMission extends Component {
    constructor(props) {
        super(props);
    }



    render() {
        return (
            <section className="section-offset about-mission">
                <div className="container">
                    <h2 className="title title_h2 title_h2-center about-mission__title">Our core values</h2>
                    <p className="large large_regular large_center large_section-descr-mb">Our mission is&nbsp;to&nbsp;set the highest standards for construction sphere.</p>
                    <CardsMini cards={[
                        {
                            title: 'Quality',
                            descr: `Culpa nostrud commodo ea${'\u00A0'}consequat aliquip reprehenderit. Veniam velit nostrud aliquip sunt.`,
                            iconSrc: <Quality />
                        },
                        {
                            title: 'Safety',
                            descr: `Anim reprehenderit sint voluptate exercitation adipisicing laborum adipisicing. Minim empor est${'\u00A0'}ea.`,
                            iconSrc: <Safety />
                        },
                        {
                            title: 'Comfort',
                            descr: `Sit veniam aute dolore adipisicing nulla sit culpa. Minim mollit voluptate ullamco proident ea${'\u00A0'}ad.`,
                            iconSrc: <Comfort />
                        }
                    ]} />
                </div>

            </section>
        )
    }
}

export default AboutMission;