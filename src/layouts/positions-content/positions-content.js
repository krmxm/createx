import { Component } from 'react';

import PositionsList from '../../components/positions-list/positions-list';

import './positions-content.scss';

class PositionsContent extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        const {positionsData} = this.props;
        return(
            <section className="positions-content section-offset">
                <h2 className="visually-hidden">Our available positions</h2>
                <div className="container">
                    <div className="positions-content__info grid">
                        <div className="positions-content__left">
                            <PositionsList positionsData={positionsData}/>
                        </div>
                        <div className="positions-content__right">
                            <div class="positions-looking">
                                <h3 class="title title_h4 positions-looking__title">Didn’t find what you were looking for?</h3>
                                <p class="large large_regular positions-looking__descr">
                                    Send your CV&nbsp;or subscribe to&nbsp;our newsletter to&nbsp;receive information about new vacancies.
                                </p>
                                <div class="positions-looking__btns">
                                    <button class="btn-reset btn btn_size-large btn_theme-outline positions-looking__btn positions-looking__btn_subs">Subscribe</button>
                                    <button class="btn-reset btn btn_size-large btn_theme-primary positions-looking__btn positions-looking__btn_send">Send CV</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default PositionsContent;