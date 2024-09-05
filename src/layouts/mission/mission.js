import { Component } from 'react';
import Forms from '../../components/forms/forms';

import Cards from '../../components/cards/cards';
import quality from '../../assets/img/icons/quality.svg';
import safety from '../../assets/img/icons/safety.svg';
import comfort from '../../assets/img/icons/comfort.svg';

import './mission.scss';

class Mission extends Component {
    constructor(props) {
        super(props);
    }



    render() {
        return (
            <section className="mission section-offset">
                <div className="container">
                    <h2 className="title title_h2 title_h2-center">Our core values</h2>
                    <p className="large large_regular large_center large_section-descr-mb">Our mission is&nbsp;to&nbsp;set the highest standards for construction sphere.</p>
                    <Cards cards={[
                        {
                            title: 'Quality',
                            descr: `Culpa nostrud commodo ea${'\u00A0'}consequat aliquip reprehenderit. Veniam velit nostrud aliquip sunt.`,
                            iconSrc: quality
                        },
                        {
                            title: 'Safety',
                            descr: `Anim reprehenderit sint voluptate exercitation adipisicing laborum adipisicing. Minim empor est${'\u00A0'}ea.`,
                            iconSrc: safety
                        },
                        {
                            title: 'Comfort',
                            descr: `Sit veniam aute dolore adipisicing nulla sit culpa. Minim mollit voluptate ullamco proident ea${'\u00A0'}ad.`,
                            iconSrc: comfort
                        }
                    ]} />
                    <form className='form mission__form' action="#">
                        <h3 className="title title_h5 title_h5-center">Want to&nbsp;know more? Ask&nbsp;us a&nbsp;question:</h3>
                        <Forms
                            isHorizontal={true}
                            isPhone={true}
                            isMessage={true}
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