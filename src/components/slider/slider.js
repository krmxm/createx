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
            slideMarginRight: 30
        }
    }

    calcWidthInner() {
        return (this.state.slideWidth + this.state.slideMarginRight) * this.state.totalSlides
    }

    nextSlide = () => {
        this.setState(state => ({
            offset: state.offset === (state.slideWidth + state.slideMarginRight) * (state.totalSlides - 3)
                ? 0
                : state.offset + state.slideWidth + state.slideMarginRight
        }));
    }

    prevSlide = () => {
        this.setState(state => ({
            offset: state.offset === 0
                ? (state.slideWidth + state.slideMarginRight) * (state.totalSlides - 3)
                : state.offset - (state.slideWidth + state.slideMarginRight)
        }));
    }


    renderSlides(slideMarginRight) {
        return this.props.slides.map(({ title, descr, picture }, index) => (
            <div key={index} style={{ marginRight: `${slideMarginRight}px`, width: `${this.state.slideWidth}px` }}>
                <a href="#" className="slider__item">
                    <img className='slider__img' src={picture} alt="Portfolio cover" />
                    <div className="slider__content">
                        <h3 className='lead lead_bold'>{title}</h3>
                        <span className='small regular'>{descr}</span>
                        <button className='btn-reset btn btn_size-regular btn_theme-outline'>View Project</button>
                    </div>
                </a>
            </div>
        ))
    }


    render() {
        const slideMarginRight = this.state.slideMarginRight;
        const offset = this.state.offset;
        return (
            <div className="slider">
                <div className="slider__top">
                    <h2 className="title title_regular slider__title">Browse our selected projects
                        and learn more about our work</h2>

                    <div className="slider__nav slider-nav">
                        <button onClick={this.prevSlide} className="btn-reset slider-nav__btn slider-nav__prev">
                            <ArrowLeft />
                        </button>
                        <button onClick={this.nextSlide} className="btn-reset slider-nav__btn slider-nav__next">
                            <ArrowRight />
                        </button>
                    </div>
                </div>
                <div className="slider__wrapper portfolio-section__items">
                    <div className="slider__inner" style={{ width: `${this.calcWidthInner()}px`, transform: `translateX(-${offset}px)` }}>
                        {this.renderSlides(slideMarginRight)}
                    </div>
                </div>
            </div>
        )
    }



}

export default SliderMini;