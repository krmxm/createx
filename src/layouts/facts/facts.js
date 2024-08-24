import React, { Component, createRef } from 'react';
import Progress from '../../components/progress/progress';

import './facts.scss';

class Facts extends Component {
    constructor(props) {
        super (props);
    }

    render() {
        return(
            <div className="facts">
                <div className="container">
                    <h2 className='title title_regular title_regular-center facts__title'>Some facts and figures</h2>
                    <ul className="facts__list">
                        <li className="facts__item">
                            <Progress percentage='98'/>
                        </li>
                        <li className="facts__item">
                            <Progress percentage='98'/>
                        </li>
                        <li className="facts__item">
                            <Progress percentage='98'/>
                        </li>
                        <li className="facts__item">
                            <Progress percentage='98'/>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Facts;