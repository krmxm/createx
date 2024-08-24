import React, { Component, createRef } from 'react';

import './progress.scss';

class Progress extends Component {
    constructor(props) {
        super(props);
        this.state = {
            strokeDashoffset: 0
        }
    }

    componentDidMount() {
        this.calculateStrokeDashoffset();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.percentage !== this.props.percentage) {
            this.calculateStrokeDashoffset();
        }
    }

    calculateStrokeDashoffset() {
        const radius = 150; // Радиус круга
        const circleLength = 2 * Math.PI * radius;
        const { percentage } = this.props;
        const strokeDashoffset = circleLength - (circleLength * percentage) / 100;
        this.setState({ strokeDashoffset });
    }

    render() {
        const { percentage } = this.props;
        const { strokeDashoffset } = this.state;
        const radius = 150;
        const circleLength = 2 * Math.PI * radius;
        return(
            <div className="progress-element">
                <div className="progress-element__circly progress-element__circly_one-color">
                    <svg class="circle-anim" viewBox="-10 -10 320 320">
                        <circle class="progress-bg" r="150" cx="150" cy="150" fill="none"
                        stroke-width="15">
                        </circle>
                        <circle class="progress" r="150" cx="150" cy="150" fill="none"
                        stroke-width="15"  style={{ strokeDasharray: circleLength, strokeDashoffset }}>
                        </circle>
                    </svg>

                    <div className="title title_small progress-element__value"  data-percentage={percentage ? percentage : undefined}>{percentage}%</div>
                </div>
                <span className="small small_regular progress-element__text">Totally satisfied clients</span>
            </div>
            
        )
    }
}

export default Progress;