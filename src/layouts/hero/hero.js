import React, { Component, createRef } from 'react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { ReactComponent as ArrowLeft } from '../../assets/img/sprite/arrow-left.svg';
import { ReactComponent as ArrowRight } from '../../assets/img/sprite/arrow-right.svg';

import './hero.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


class Hero extends Component {
    constructor(props) {
        super(props);

        this.prevRef = createRef();
        this.nextRef = createRef();
        this.state = {
            prevBtnActive: true,
            nextBtnActive: true
        }
    }

    onRenderSlides = (slides) => {
        return (
            <>
            <SwiperSlide>
                <div className="hero-slide hero-slide_1">
                    <div className="container">
                        <div className="hero__content">
                            <h1 className="title title_home hero__title">Create<span>x</span> Construction</h1>
                            <p className="lead lead_regular hero__descr hero__descr_home">
                                Cras ultrices leo vitae non viverra. Fringilla nisi quisque consequat, dignissim vitae proin ipsum sed. Pellentesque nec turpis purus eget pellentesque integer ipsum elementum felis.
                            </p>
                            <div className="hero__btns">
                                <button className='btn-reset btn btn_size-large btn_theme-light'>Learn more about us</button>
                                <button className='btn-reset btn btn_size-large btn_theme-primary'>Submit Request</button>
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="hero-slide hero-slide_2">
                    <div className="container">
                        <div className="hero__content">
                            <h1 className="title title_home hero__title">Create<span>x</span> Construction</h1>
                            <p className="lead lead_regular hero__descr hero__descr_home">
                                Cras ultrices leo vitae non viverra. Fringilla nisi quisque consequat, dignissim vitae proin ipsum sed. Pellentesque nec turpis purus eget pellentesque integer ipsum elementum felis.
                            </p>
                            <div className="hero__btns">
                                <button className='btn-reset btn btn_size-large btn_theme-light'>Learn more about us</button>
                                <button className='btn-reset btn btn_size-large btn_theme-primary'>Submit Request</button>
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="hero-slide hero-slide_3">
                    <div className="container">
                        <div className="hero__content">
                            <h1 className="title title_home hero__title">Create<span>x</span> Construction</h1>
                            <p className="lead lead_regular hero__descr hero__descr_home">
                                Cras ultrices leo vitae non viverra. Fringilla nisi quisque consequat, dignissim vitae proin ipsum sed. Pellentesque nec turpis purus eget pellentesque integer ipsum elementum felis.
                            </p>
                            <div className="hero__btns">
                                <button className='btn-reset btn btn_size-large btn_theme-light'>Learn more about us</button>
                                <button className='btn-reset btn btn_size-large btn_theme-primary'>Submit Request</button>
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="hero-slide hero-slide_4">
                    <div className="container">
                        <div className="hero__content">
                            <h1 className="title title_home hero__title">Create<span>x</span> Construction</h1>
                            <p className="lead lead_regular hero__descr hero__descr_home">
                                Cras ultrices leo vitae non viverra. Fringilla nisi quisque consequat, dignissim vitae proin ipsum sed. Pellentesque nec turpis purus eget pellentesque integer ipsum elementum felis.
                            </p>
                            <div className="hero__btns">
                                <button className='btn-reset btn btn_size-large btn_theme-light'>Learn more about us</button>
                                <button className='btn-reset btn btn_size-large btn_theme-primary'>Submit Request</button>
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            </>
                     
        )
        
        }

    render() {
        const prevBtnClass = this.state.prevBtnActive ? 'btn-reset slider-nav__btn' : 'btn-reset slider-nav__btn slider-nav__btn_disabled';
        const nextBtnClass = this.state.nextBtnActive ? 'btn-reset slider-nav__btn' : 'btn-reset slider-nav__btn slider-nav__btn_disabled';

        return (
            <section className="hero">
                <h1 className="visually-hidden">Createx Construction Bureau</h1>
                <div className="hero-slider">
                    <button ref={this.prevRef} className={`${prevBtnClass} hero__prev`}>
                            <ArrowLeft />
                    </button>
                    <button ref={this.nextRef} className={`${prevBtnClass} hero__next`}>
                        <ArrowRight />
                    </button>
                    <div className="swiper-pagination hero__pag"></div>
                    <Swiper
                        slidesPerView={1}
                        loop={true}
                        speed={500}
                        navigation={{
                            prevEl: this.prevRef.current,
                            nextEl: this.nextRef.current,
                        }}
                        pagination={{ 
                            el: '.hero__pag', // Указываем класс для пагинации
                            clickable: true 
                        }}
                        autoplay={{
                            delay: 3000, // Устанавливаем задержку в 3 секунды
                            disableOnInteraction: false // Не останавливать автопроигрывание при взаимодействии
                        }}
                        modules={[Navigation, Pagination, Autoplay]}
                        onBeforeInit={(swiper) => {
                            swiper.params.navigation.prevEl = this.prevRef.current;
                            swiper.params.navigation.nextEl = this.nextRef.current;
                            swiper.navigation.init();
                            swiper.navigation.update();
                        }}
                        onInit={(swiper) => {
                            const paginationBullets = document.querySelectorAll('.hero__pag .swiper-pagination-bullet');

                            paginationBullets.forEach(el => {
                            el.innerHTML = `<span class="hero__bar"></span>`;
                            });
                        }}
                    >
                        {this.onRenderSlides()}

                    </Swiper>
                    
                </div>
            </section>
        )
    }
}

export default Hero;