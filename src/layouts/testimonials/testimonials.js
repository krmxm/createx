import React, { Component, createRef } from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

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
    }

    render() {
        return (
            <div className="testimonials">
                <div className="container testimonials__container">
                    <div className="testimonials__content">
                        <h2 className="title title_regular">What our clients are saying</h2>
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
                        >
                            <SwiperSlide>
                                <div className="testimonials-item">
                                    <img src={Humen1} alt="Human 1" className="testmonials-item__img" />
                                    <p className='base base_regular'>
                                        Ipsum aute sunt aliquip aute et{' '}
                                        occaecat. Anim minim do{' '}
                                        cillum eiusmod enim. Consectetur magna 
                                        cillum consequat minim laboris cillum 
                                        laboris voluptate minim proident exercitation 
                                        ullamco.
                                    </p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>Slide 2</SwiperSlide>
                            <SwiperSlide>Slide 3</SwiperSlide>
                            <SwiperSlide>Slide 4</SwiperSlide>
                        </Swiper>
                        <div className="testimonials__buttons">
                            <button ref={this.prevRef} className="testimonials__prev">Prev</button>
                            <button ref={this.nextRef} className="testimonials__next">Next</button>
                        </div>
                    </div>
                    <img src="#" alt="" />
                </div>
            </div>
        );
    }
}

export default Testimonials;
