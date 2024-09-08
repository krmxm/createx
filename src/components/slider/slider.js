import { Component } from 'react';

import { ReactComponent as ArrowLeft } from '../../assets/img/sprite/arrow-left.svg';
import { ReactComponent as ArrowRight } from '../../assets/img/sprite/arrow-right.svg';

import './slider.scss';

class SliderMini extends Component {
    constructor(props) {
        super(props);
        this.state = {
            offset: 0,
            currentSlide: 0,
            totalSlides: this.props.slides.length,
            slideWidth: 390,
            slideMarginRight: 30,
            prevBtnActive: false,  // Кнопка prev неактивна при инициализации
            nextBtnActive: true    // Кнопка next активна при инициализации
        };
    }

    calcWidthInner() {
        return (this.state.slideWidth + this.state.slideMarginRight) * this.state.totalSlides;
    }

    updateButtonStates(newOffset) {
        const maxOffset = (this.state.slideWidth + this.state.slideMarginRight) * (this.state.totalSlides - 3);

        this.setState({
            prevBtnActive: newOffset > 0,
            nextBtnActive: newOffset < maxOffset
        });
    }

    nextSlide = () => {
        this.setState(state => {
            const newOffset = state.offset === (state.slideWidth + state.slideMarginRight) * (state.totalSlides - 3)
                ? 0
                : state.offset + state.slideWidth + state.slideMarginRight;
            const newCurrentSlide = state.currentSlide === state.totalSlides - 3
                ? 0
                : state.currentSlide + 1;

            this.updateButtonStates(newOffset);

            return {
                offset: newOffset,
                currentSlide: newCurrentSlide,
            };
        });
    }

    prevSlide = () => {
        this.setState(state => {
            const newOffset = state.offset === 0
                ? (state.slideWidth + state.slideMarginRight) * (state.totalSlides - 3)
                : state.offset - (state.slideWidth + state.slideMarginRight);
            const newCurrentSlide = state.currentSlide === 0
                ? state.totalSlides - 3
                : state.currentSlide - 1;

            this.updateButtonStates(newOffset);

            return {
                offset: newOffset,
                currentSlide: newCurrentSlide
            };
        });
    }

    isSlideVisible(index) {
        const visibleSlides = 3;
        return index >= this.state.currentSlide && index < this.state.currentSlide + visibleSlides;
    }

    renderSlides(slideMarginRight) {
        return this.props.slides.map(({ title, descr, picture }, index) => {
            const isVisible = this.isSlideVisible(index);
            return (
                <div
                    key={index}
                    style={{
                        marginRight: `${slideMarginRight}px`,
                        width: `${this.state.slideWidth}px`,
                        opacity: isVisible ? 1 : 0,
                        visibility: isVisible ? 'visible' : 'hidden',
                        transition: 'opacity 0.5s ease, visibility 0.5s ease'
                    }}
                >
                    <a href="#" className="slider__item">
                        <img className='slider__img' src={picture} alt="Portfolio cover" />
                        <div className="slider__content">
                            <h3 className='lead lead_bold'>{title}</h3>
                            <span className='small regular'>{descr}</span>
                            <button className='btn-reset btn btn_size-regular btn_theme-outline slider__btn-slide'>View Project</button>

                        </div>

                    </a>
                </div>
            );
        });
    }

    render() {
        const slideMarginRight = this.state.slideMarginRight;
        const offset = this.state.offset;
        const title = this.props.title;

        // Установка классов для кнопок
        const prevBtnClass = this.state.prevBtnActive ? 'btn-reset slider-nav__btn slider-nav__prev' : 'btn-reset slider-nav__btn slider-nav__prev slider-nav__btn_disabled';
        const nextBtnClass = this.state.nextBtnActive ? 'btn-reset slider-nav__btn slider-nav__next' : 'btn-reset slider-nav__btn slider-nav__next slider-nav__btn_disabled';

        return (
            <div className="slider">
                <div className="slider__top">
                    <h2 className="title title_h2 slider__title">{title}</h2>

                    <div className="slider__nav slider-nav">
                        <button onClick={this.prevSlide} className={prevBtnClass}>
                            <ArrowLeft />
                        </button>
                        <button onClick={this.nextSlide} className={nextBtnClass}>
                            <ArrowRight />
                        </button>
                    </div>
                </div>
                <div className="slider__wrapper portfolio-section__items">
                    <div className="slider__inner" style={{ width: `${this.calcWidthInner()}px`, transform: `translateX(-${offset}px)`, transition: 'transform 0.5s ease-in-out' }}>
                        {this.renderSlides(slideMarginRight)}
                    </div>
                </div>
            </div>
        );
    }
}

export default SliderMini;
