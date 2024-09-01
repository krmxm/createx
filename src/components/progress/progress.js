import React, { Component } from 'react';
import './progress.scss';

class Progress extends Component {
    constructor(props) {
        super(props);
        this.radius = 150; // Радиус круга
        this.state = {
            strokeDashoffset: 2 * Math.PI * this.radius, // Устанавливаем начальное значение
            isVisible: false // Флаг для видимости
        };
        this.progressRef = React.createRef(); // Реф для отслеживания элемента
    }

    componentDidMount() {
        this.calculateStrokeDashoffset();

        // Создаем и настраиваем Intersection Observer
        this.observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.setState({ isVisible: true });
                    this.calculateStrokeDashoffset(); // Пересчитываем при видимости
                    this.observer.disconnect(); // Отключаем наблюдатель после первой видимости
                }
            });
        }, {
            root: null,
            rootMargin: '0px',
            threshold: 0.1 // Величина видимости элемента
        });

        if (this.progressRef.current) {
            this.observer.observe(this.progressRef.current);
        }
    }

    componentWillUnmount() {
        if (this.observer) {
            this.observer.disconnect(); // Отключаем наблюдатель при размонтировании компонента
        }
    }

    calculateStrokeDashoffset() {
        const radius = this.radius;
        const { value } = this.props;
        const circleLength = 2 * Math.PI * radius;

        let strokeDashoffset;
        if (this.props.percentage) {
            strokeDashoffset = circleLength - (circleLength * value) / 100;
        }
        else if (this.props.full && this.props.value) {
            strokeDashoffset = circleLength - (circleLength * this.props.value) / this.props.full;
        } else {
            strokeDashoffset = circleLength; // Устанавливаем начальное значение
        }

        this.setState({ strokeDashoffset });
    }

    render() {
        const { percentage, value, descr, color } = this.props;
        const { strokeDashoffset, isVisible } = this.state;
        const radius = this.radius;
        const circleLength = 2 * Math.PI * radius;

        return (
            <div className="progress-element" ref={this.progressRef}>
                <div className={`progress-element__circly progress-element__circly_${color}`}>
                    <svg className="circle-anim" viewBox="-10 -10 320 320">
                        <circle className="progress-bg" r={radius} cx="150" cy="150" fill="none" strokeWidth="15"></circle>
                        <circle
                            className="progress"
                            r={radius}
                            cx="150"
                            cy="150"
                            fill="none"
                            strokeWidth="15"
                            style={{ strokeDasharray: circleLength, strokeDashoffset: isVisible ? strokeDashoffset : circleLength }} // Анимация только при видимости
                        ></circle>
                    </svg>
                    <div className="title title_h5 progress-element__value" data-percentage={value ? value : undefined}>
                        {percentage ? `${value}%` : value}
                    </div>
                </div>
                <span className="small small_regular progress-element__text">{descr}</span>
            </div>
        );
    }
}

export default Progress;
