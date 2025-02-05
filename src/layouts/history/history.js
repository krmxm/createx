import React, { Component, createRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';



import { ReactComponent as ArrowLeft } from '../../assets/img/sprite/arrow-left.svg';
import { ReactComponent as ArrowRight } from '../../assets/img/sprite/arrow-right.svg';

import './history.scss';

import History1 from '../../assets/img/history/history-1.jpeg';
import History2 from '../../assets/img/history/history-2.jpg';
import History3 from '../../assets/img/history/history-3.jpg';
import History4 from '../../assets/img/history/history-4.jpg';
import History5 from '../../assets/img/history/history-5.jpg';
import History6 from '../../assets/img/history/history-6.jpg';


import { FreeMode, Navigation, Thumbs } from 'swiper/modules';


class History extends Component {
    constructor(props) {
        super(props);
        this.state = { thumbsSwiper: null };
        // this.setThumbsSwiper = this.setThumbsSwiper.bind(this);
        this.prevRef = createRef();
        this.nextRef = createRef();
        this.swiperRef = createRef();
        this.state = {
            prevBtnActive: true,
            nextBtnActive: true,
            activeTabIndex: 0
        }

    }

    prevSlide = () => {
        this.swiperRef.current.swiper.slidePrev();
    };

    nextSlide = () => {
        this.swiperRef.current.swiper.slideNext();
    };

    handleReachEnd = () => {
        this.setState({
            nextBtnActive: false,
        });
    };

    handleReachBeginning = () => {
        this.setState({
            prevBtnActive: false,
        });
    };

    handleSlideChange = () => {
        const swiper = this.swiperRef.current.swiper;
        const isBeginning = swiper.isBeginning;
        const isEnd = swiper.isEnd;

        this.setState({
            prevBtnActive: !isBeginning,
            nextBtnActive: !isEnd,
            activeTabIndex: swiper.activeIndex // Обновляем активный таб
        });
    };

    navigateToSlide = (index) => {
        this.swiperRef.current.swiper.slideTo(index);
    };

    handleTabClick = (index) => {
        if (this.swiperRef.current && this.swiperRef.current.swiper) {
            this.swiperRef.current.swiper.slideTo(index);
        }
    };

    handleMouseEnter = () => {
        if (this.swiperRef.current && this.swiperRef.current.swiper) {
            this.swiperRef.current.swiper.autoplay.stop();
        }
    };

    // Возобновление автопрокрутки при уходе курсора
    handleMouseLeave = () => {
        if (this.swiperRef.current && this.swiperRef.current.swiper) {
            this.swiperRef.current.swiper.autoplay.start();
        }
    };

    render() {
        const prevBtnClass = this.state.prevBtnActive ? 'btn-reset slider-nav-history__btn slider-nav-history__prev' : 'btn-reset slider-nav-history__btn slider-nav-history__prev slider-nav-history__btn_disabled';
        const nextBtnClass = this.state.nextBtnActive ? 'btn-reset slider-nav-history__btn slider-nav-history__next' : 'btn-reset slider-nav-history__btn slider-nav-history__next slider-nav-history__btn_disabled';
        return (
            <section className="history">
                <div className="container">
                    <div class="history__top">
                        <h2 className="title title_h2 slider__title">Our history</h2>

                        <div className="slider__nav slider-nav-history">
                            <button onClick={this.prevSlide} className={prevBtnClass}>
                                <ArrowLeft />
                            </button>
                            <button onClick={this.nextSlide} className={nextBtnClass}>
                                <ArrowRight />
                            </button>
                        </div>
                    </div>
                    <div className="history__content grid" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
                        <ul class="list-reset history-nav">
                            {['Present', 'March 2019', 'November 2018', 'July 2015', 'August 2010', 'February 2007', 'May 2004', 'October 2001', 'June 2000'].map((label, index) => (
                                <li className="history-nav__item" key={index}>
                                    <button
                                        className={`btn-reset history-nav__btn ${this.state.activeTabIndex === index ? 'history-nav__btn--active' : ''}`}
                                        onClick={() => this.handleTabClick(index)}
                                    >
                                        {label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                        <Swiper className="history__item history-slider"
                            className="history__item history-slider"
                            ref={this.swiperRef}
                            autoplay={{
                                delay: 3000, // Устанавливаем задержку в 3 секунды
                                disableOnInteraction: false // Не останавливать автопроигрывание при взаимодействии
                            }}
                            modules={[Navigation, FreeMode, Thumbs, Autoplay]}
                            navigation={{
                                prevEl: this.prevRef.current,
                                nextEl: this.nextRef.current,
                            }}
                            speed={500}
                            onReachEnd={this.handleReachEnd}
                            onReachBeginning={this.handleReachBeginning}
                            onSlideChange={this.handleSlideChange}
                        >
                            <SwiperSlide>
                                <img src={History1} alt="History image" class="history__image" />
                                <p class="history__descr">
                                    Bcelerisque dapibus pharetra nibh semper iaculis duis viverra porttitor&nbsp;in. Eu&nbsp;nec vitae,
                                    malesuada
                                    vitae egestas integer et&nbsp;morbi. Maecenas sed quis diam posuere malesuada magnis. Bcelerisque dapibus.
                                    Eu&nbsp;nec vitae,
                                </p>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={History2} alt="History image" class="history__image" />
                                <p class="history__descr">
                                    Bcelerisque dapibus pharetra nibh semper iaculis duis viverra porttitor&nbsp;in. Eu&nbsp;nec vitae,
                                    malesuada
                                    vitae egestas integer et&nbsp;morbi. Maecenas sed quis diam posuere malesuada magnis. Bcelerisque dapibus.
                                    Eu&nbsp;nec vitae,
                                </p>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={History3} alt="History image" class="history__image" />
                                <p class="history__descr">
                                    Bcelerisque dapibus pharetra nibh semper iaculis duis viverra porttitor&nbsp;in. Eu&nbsp;nec vitae,
                                    malesuada
                                    vitae egestas integer et&nbsp;morbi. Maecenas sed quis diam posuere malesuada magnis. Bcelerisque dapibus.
                                    Eu&nbsp;nec vitae,
                                </p>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={History4} alt="History image" class="history__image" />
                                <p class="history__descr">
                                    Bcelerisque dapibus pharetra nibh semper iaculis duis viverra porttitor&nbsp;in. Eu&nbsp;nec vitae,
                                    malesuada
                                    vitae egestas integer et&nbsp;morbi. Maecenas sed quis diam posuere malesuada magnis. Bcelerisque dapibus.
                                    Eu&nbsp;nec vitae,
                                </p>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={History5} alt="History image" class="history__image" />
                                <p class="history__descr">
                                    Bcelerisque dapibus pharetra nibh semper iaculis duis viverra porttitor&nbsp;in. Eu&nbsp;nec vitae,
                                    malesuada
                                    vitae egestas integer et&nbsp;morbi. Maecenas sed quis diam posuere malesuada magnis. Bcelerisque dapibus.
                                    Eu&nbsp;nec vitae,
                                </p>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={History6} alt="History image" class="history__image" />
                                <p class="history__descr">
                                    Bcelerisque dapibus pharetra nibh semper iaculis duis viverra porttitor&nbsp;in. Eu&nbsp;nec vitae,
                                    malesuada
                                    vitae egestas integer et&nbsp;morbi. Maecenas sed quis diam posuere malesuada magnis. Bcelerisque dapibus.
                                    Eu&nbsp;nec vitae,
                                </p>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={History1} alt="History image" class="history__image" />
                                <p class="history__descr">
                                    Bcelerisque dapibus pharetra nibh semper iaculis duis viverra porttitor&nbsp;in. Eu&nbsp;nec vitae,
                                    malesuada
                                    vitae egestas integer et&nbsp;morbi. Maecenas sed quis diam posuere malesuada magnis. Bcelerisque dapibus.
                                    Eu&nbsp;nec vitae,
                                </p>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={History1} alt="History image" class="history__image" />
                                <p class="history__descr">
                                    Bcelerisque dapibus pharetra nibh semper iaculis duis viverra porttitor&nbsp;in. Eu&nbsp;nec vitae,
                                    malesuada
                                    vitae egestas integer et&nbsp;morbi. Maecenas sed quis diam posuere malesuada magnis. Bcelerisque dapibus.
                                    Eu&nbsp;nec vitae,
                                </p>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={History1} alt="History image" class="history__image" />
                                <p class="history__descr">
                                    Bcelerisque dapibus pharetra nibh semper iaculis duis viverra porttitor&nbsp;in. Eu&nbsp;nec vitae,
                                    malesuada
                                    vitae egestas integer et&nbsp;morbi. Maecenas sed quis diam posuere malesuada magnis. Bcelerisque dapibus.
                                    Eu&nbsp;nec vitae,
                                </p>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </section>
        )
    }
}

export default History;