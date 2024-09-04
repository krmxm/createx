import { Component, createRef } from 'react';

import './how-we-do.scss';

class HowWeDo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className="how-we-do">
                <div className="container">
                    <h2 className="title title_h2 how-we-do__title">That’s how we do it</h2>
                    <ul className="how-we-do__list">
                        <li className="how-we-do__item">
                            <h3 className="lead lead_bold how-we-do__subtitle">Work Estimate</h3>
                            <p className="base base_regular how-we-do__descr">Culpa nostrud commodo ea consequat aliquip reprehenderit.</p>
                        </li>
                        <li className="how-we-do__item">
                            <h3 className="lead lead_bold how-we-do__subtitle">Contract</h3>
                            <p className="base base_regular how-we-do__descr">Laoreet ultrices curabitur luctus quisque consequat. Leo lorem velit imperdiet auctor et tempor.</p>
                        </li>
                        <li className="how-we-do__item">
                            <h3 className="lead lead_bold how-we-do__subtitle">Mobilization</h3>
                            <p className="base base_regular how-we-do__descr">Odio massa scelerisque purus arcu sed velit eleifend cursus leo.</p>
                        </li>
                        <li className="how-we-do__item">
                            <h3 className="lead lead_bold how-we-do__subtitle">Construction Work</h3>
                            <p className="base base_regular how-we-do__descr">Adipisicing esse aliqua aliquip qui amet. Aute eiusmod dolore dolore et ad et veniam ad deserunt.</p>
                        </li>
                    </ul>
                </div>
            </section>
        )
    }
}

export default HowWeDo;