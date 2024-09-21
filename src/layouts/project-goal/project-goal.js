import React, { Component } from 'react';

import './project-goal.scss';

class ProjectGoal extends Component {
    constructor(props){
        super(props);
    }

    render () {
        return(
            <section className="project-goal">
                <div className="container grid">
                    <div className="project-goal__left">
                        <h2 className="title title_h2 project-goal__title">Project goal</h2>
                        <p className="large large_regular project-goal__descr">Build a private house 840 sq. feet with a large living room, three bedrooms, two bathrooms, a terrace, a pool and a garage for two cars.
                        </p>
                        <p className="large large_regular project-goal__descr">Modern design and care for each family member to feel as comfortable as possible in the new home.</p>
                    </div>
                    <div className="project-goal__right">
                        <div className="project-goal__info">
                            <ul className="project-goal__list">
                                <li className="project-goal__item">
                                    <div className='base base_bold project-goal__category'>LOCATION</div>
                                    <div className='base base_bold project-goal__value'>2464 Royal Ln. Mesa, New Jersey</div>
                                </li>
                                <li className="project-goal__item">
                                    <div className='base base_bold project-goal__category'>CLIENT</div>
                                    <div className='base base_bold project-goal__value'>Darlene Robertson</div>
                                </li>
                                <li className="project-goal__item">
                                    <div className='base base_bold project-goal__category'>ARCHITECT</div>
                                    <div className='base base_bold project-goal__value'>HIK Architecture</div>
                                </li>
                                <li className="project-goal__item">
                                    <div className='base base_bold project-goal__category'>SIZE</div>
                                    <div className='base base_bold project-goal__value'>840 sq. feet</div>
                                </li>
                                <li className="project-goal__item">
                                    <div className='base base_bold project-goal__category'>VALUE</div>
                                    <div className='base base_bold project-goal__value'>$2 million</div>
                                </li>
                                <li className="project-goal__item">
                                    <div className='base base_bold project-goal__category'>COMPLETED</div>
                                    <div className='base base_bold project-goal__value'>May 2020</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default ProjectGoal;