import React, { Component, createRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


import { ReactComponent as ArrowLeft } from '../../assets/img/sprite/arrow-left.svg';
import { ReactComponent as ArrowRight } from '../../assets/img/sprite/arrow-right.svg';

import './history.scss';

import History1 from '../../assets/img/history/history-1.jpeg';

import { FreeMode, Navigation, Thumbs } from 'swiper/modules';


class History extends Component {
    constructor(props) {
        super(props);
        this.state = { thumbsSwiper: null };
        // this.setThumbsSwiper = this.setThumbsSwiper.bind(this);
        this.prevRef = createRef();
        this.nextRef = createRef();
        this.state = {
            prevBtnActive: true,
            nextBtnActive: true
        }
    }

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
                    <div className="history__content grid">
                        <ul class="list-reset history-nav">
                            <li class="history-nav__item">
                                <button class="btn-reset history-nav__btn history-nav__btn--active">Present</button>
                            </li>
                            <li class="history-nav__item">
                                <button class="btn-reset history-nav__btn">March 2019</button>
                            </li>
                            <li class="history-nav__item">
                                <button class="btn-reset history-nav__btn">November 2018</button>
                            </li>
                            <li class="history-nav__item">
                                <button class="btn-reset history-nav__btn">July 2015</button>
                            </li>
                            <li class="history-nav__item">
                                <button class="btn-reset history-nav__btn">August 2010</button>
                            </li>
                            <li class="history-nav__item">
                                <button class="btn-reset history-nav__btn">February 2007</button>
                            </li>
                            <li class="history-nav__item">
                                <button class="btn-reset history-nav__btn">May 2004</button>
                            </li>
                            <li class="history-nav__item">
                                <button class="btn-reset history-nav__btn">October 2001</button>
                            </li>
                            <li class="history-nav__item">
                                <button class="btn-reset history-nav__btn">June 2000</button>
                            </li>
                        </ul>
                        <Swiper className="history__item history-slider">
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