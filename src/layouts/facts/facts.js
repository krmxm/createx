import React, { Component, createRef } from 'react';
import Progress from '../../components/progress/progress';

import './facts.scss';

class Facts extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="facts section-offset">
                <div className="container">
                    <h2 className='title title_h2 title_h2-center facts__title'>Some facts and figures</h2>
                    <ul className="facts__list">
                        <li className="facts__item">
                            <Progress descr="Totally satisfied clients" percentage value="98" color="one-color" />
                        </li>
                        <li className="facts__item">
                            <Progress descr="Years of experience" full='50' value='35' color="two-color" />
                        </li>
                        <li className="facts__item">
                            <Progress descr="Working hours spent" full="10000" value="9452" color="three-color" />
                        </li>
                        <li className="facts__item">
                            <Progress descr="Succeeded projects" percentage value="100" color="four-color" />
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Facts;