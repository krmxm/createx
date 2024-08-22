import React, { Component, createRef } from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { ReactComponent as ArrowLeft } from '../../assets/img/sprite/arrow-left.svg';
import { ReactComponent as ArrowRight } from '../../assets/img/sprite/arrow-right.svg';

import Image from '../../assets/img/testimonials-image.jpeg';

import './testimonials.scss';
import 'swiper/css';
import 'swiper/css/navigation';

import Humen1 from '../../assets/img/testmonials-author.png';

class Testimonials extends Component {
    constructor(props) {
        super(props);
        // Создаем рефы для кнопок навигации
        this.prevRef = createRef();
        this.nextRef = createRef();
        this.state = {
            prevBtnActive: true,
            nextBtnActive: true
        }
    }



    render() {
        const prevBtnClass = this.state.prevBtnActive ? 'btn-reset slider-nav__btn slider-nav__prev' : 'btn-reset slider-nav__btn slider-nav__prev slider-nav__btn_disabled';
        const nextBtnClass = this.state.nextBtnActive ? 'btn-reset slider-nav__btn slider-nav__next' : 'btn-reset slider-nav__btn slider-nav__next slider-nav__btn_disabled';
        return (
            <div className="testimonials">
                <div className="container testimonials__container">
                    <div className="testimonials__content">
                        <h2 className="title title_regular testimonials__title">What our clients are saying</h2>
                        <Swiper
                            spaceBetween={50}
                            slidesPerView={1}
                            loop={true}
                            navigation={{
                                prevEl: this.prevRef.current,
                                nextEl: this.nextRef.current,
                            }}
                            modules={[Navigation]}
                            onBeforeInit={(swiper) => {
                                swiper.params.navigation.prevEl = this.prevRef.current;
                                swiper.params.navigation.nextEl = this.nextRef.current;
                                swiper.navigation.init();
                                swiper.navigation.update();
                            }}
                            onInit={(swiper) => {
                                // Добавляем класс ко всему контейнеру слайдов
                                swiper.wrapperEl.classList.add('my-custom-wrapper-class');
                            }}
                        >
                            <SwiperSlide>
                                <div className="testimonials-item">
                                    <img src={Humen1} alt="Human 1" className="testimonials-item__img" />
                                    <p className='base base_regular testimonials-item__descr'>
                                        Ipsum aute sunt aliquip aute et{' '}
                                        occaecat. Anim minim do{' '}
                                        cillum eiusmod enim. Consectetur magna
                                        cillum consequat minim laboris cillum
                                        laboris voluptate minim proident exercitation
                                        ullamco.
                                    </p>
                                    <span className="base base_bold testimonials-item__author">Shawn Edwards</span>
                                    <span className="small small_regular testimonials-item__author-position">Position, Company name</span>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>Slide 2</SwiperSlide>
                            <SwiperSlide>Slide 3</SwiperSlide>
                            <SwiperSlide>Slide 4</SwiperSlide>
                            <div className="slider-nav testimonials__buttons">
                                <button ref={this.prevRef} className={prevBtnClass}>
                                    <ArrowLeft />
                                </button>
                                <button ref={this.nextRef} className={nextBtnClass}>
                                    <ArrowRight />
                                </button>
                            </div>
                        </Swiper>

                    </div>
                    <img src={Image} alt="clients" aria-hidden="true" className='testimonials__image' />
                </div>
            </div>
        );
    }
}

export default Testimonials;
