import { Component } from 'react';
import Forms from '../../components/forms/forms';

import CardsMini from '../../components/cards-mini/cards-mini';

import { ReactComponent as Quality } from '../../assets/img/icons/quality.svg';
import { ReactComponent as Safety } from '../../assets/img/icons/safety.svg';
import { ReactComponent as Comfort } from '../../assets/img/icons/comfort.svg';

import './mission.scss';

class Mission extends Component {
    constructor(props) {
        super(props);
    }



    render() {
        return (
            <section className="mission section-offset">
                <div className="container">
                    <h2 className="title title_h2 title_h2-center mission__title">Our core values</h2>
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
                    <form className='form mission__form' action="#">
                        <h3 className="title title_h4 title_h4-center">Want to&nbsp;know more? Ask&nbsp;us a&nbsp;question:</h3>
                        <Forms
                            isOrientation='horizontal'
                            isPhone={true}
                            isMessage={true}
                            classForSection='know-more'
                            buttonClass={'btn-reset btn btn_size-regular btn_theme-primary'}
                            buttonText={'Send'}
                        />
                    </form>
                </div>

            </section>
        )
    }
}

export default Mission;