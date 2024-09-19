import React, { Component, createRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import './slider-gallery.scss';

import Work1 from '../../assets/img/work-1/work-1.jpeg';
import Work1Small from '../../assets/img/work-1/work-1-small.jpeg';
import Work2 from '../../assets/img/portfolio/portfolio-1.jpeg';
import Work3 from '../../assets/img/portfolio/portfolio-2.jpeg';
import Work4 from '../../assets/img/portfolio/portfolio-3.jpeg';




// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

import { ReactComponent as ArrowLeft } from '../../assets/img/sprite/arrow-left.svg';
import { ReactComponent as ArrowRight } from '../../assets/img/sprite/arrow-right.svg';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { thumbsSwiper: null };
    this.setThumbsSwiper = this.setThumbsSwiper.bind(this);
    this.prevRef = createRef();
    this.nextRef = createRef();
    this.state = {
      prevBtnActive: true,
      nextBtnActive: true
    }
  }

  setThumbsSwiper(swiper) {
    this.setState({ thumbsSwiper: swiper });
  }

  render() {
    const prevBtnClass = this.state.prevBtnActive ? 'btn-reset slider-nav__btn slider-nav__prev' : 'btn-reset slider-nav__btn slider-nav__prev slider-nav__btn_disabled';
    const nextBtnClass = this.state.nextBtnActive ? 'btn-reset slider-nav__btn slider-nav__next' : 'btn-reset slider-nav__btn slider-nav__next slider-nav__btn_disabled';
    return (
      <>
        <Swiper
          style={{
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff',
          }}
          spaceBetween={10}
          navigation={{
            prevEl: this.prevRef.current,
            nextEl: this.nextRef.current,
          }}
          thumbs={{ swiper: this.state.thumbsSwiper && !this.state.thumbsSwiper.destroyed ? this.state.thumbsSwiper : null }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper2"
        >
          <SwiperSlide>
            <img src={Work1} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Work2} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Work3} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Work4} />
          </SwiperSlide>
          <button ref={this.prevRef} className={prevBtnClass}>
            <ArrowLeft />
          </button>
          <button ref={this.nextRef} className={nextBtnClass}>
            <ArrowRight />
          </button>
        </Swiper>
        <Swiper
          onSwiper={this.setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={Work1Small} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Work2} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Work3} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Work4} />
          </SwiperSlide>
        </Swiper>

      </>
    );
  }
}
