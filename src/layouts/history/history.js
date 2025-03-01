import React, { Component, createRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs, Autoplay } from 'swiper/modules';
import { ReactComponent as ArrowLeft } from '../../assets/img/sprite/arrow-left.svg';
import { ReactComponent as ArrowRight } from '../../assets/img/sprite/arrow-right.svg';
import './history.scss';
import History1 from '../../assets/img/history/history-1.jpeg';
import History2 from '../../assets/img/history/history-2.jpg';
import History3 from '../../assets/img/history/history-3.jpg';
import History4 from '../../assets/img/history/history-4.jpg';
import History5 from '../../assets/img/history/history-5.jpg';
import History6 from '../../assets/img/history/history-6.jpg';

class History extends Component {
    constructor(props) {
        super(props);
        this.state = {
            thumbsSwiper: null,
            prevBtnActive: true,
            nextBtnActive: true,
            activeTabIndex: 0,
            autoplay: false,
        };
        this.startAutoplay = this.startAutoplay.bind(this);
        this.stopAutoplay = this.stopAutoplay.bind(this);
        this.prevRef = createRef();
        this.nextRef = createRef();
        this.swiperRef = createRef();
        this.historyRef = createRef();
        this.observer = null;
    }

    componentDidMount() {
        this.observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    console.log('Intersection entry:', entry.isIntersecting, entry); // Логируем видимость и весь entry
                    if (entry.isIntersecting) {
                        console.log('Element is visible, starting autoplay');
                        this.startAutoplay();
                    } else {
                        console.log('Element is not visible, stopping autoplay');
                        this.stopAutoplay();
                    }
                });
            },
            {
                threshold: 0.5, // Настройте порог, если нужно
            }
        );
    
        if (this.historyRef.current) {
            console.log('Observing element:', this.historyRef.current);
            this.observer.observe(this.historyRef.current);
        } else {
            console.error('historyRef is not attached to any element');
        }
    }

    componentWillUnmount() {
        if (this.observer) {
            this.observer.disconnect();
        }
        this.stopAutoplay();
    }

    startAutoplay = () => {
        if (!this.state.autoplay) { // Проверяем, нужно ли обновлять состояние
            this.setState({ autoplay: true }, () => {
                console.log('Autoplay state:', this.state.autoplay); // Логируем состояние
                if (this.swiperRef.current && this.swiperRef.current.swiper) {
                    this.swiperRef.current.swiper.autoplay.start();
                }
            });
        }
    };

    stopAutoplay = () => {
        if (this.state.autoplay) { // Проверяем, нужно ли обновлять состояние
            this.setState({ autoplay: false }, () => {
                console.log('Autoplay state:', this.state.autoplay); // Логируем состояние
                if (this.swiperRef.current && this.swiperRef.current.swiper) {
                    this.swiperRef.current.swiper.autoplay.stop();
                }
            });
        }
    };

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
            <section className="history" ref={this.historyRef}>
                <div className="container">
                    <div className="history__top">
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
                        <ul className="list-reset history-nav">
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
                        <Swiper 
                            className="history__item history-slider"
                            autoplay={this.state.autoplay ? { delay: 3500 } : false}
                            modules={[Navigation, FreeMode, Thumbs, Autoplay]}
                            navigation={{
                                prevEl: this.prevRef.current,
                                nextEl: this.nextRef.current,
                            }}
                            speed={500}
                            onReachEnd={this.handleReachEnd}
                            onReachBeginning={this.handleReachBeginning}
                            onSlideChange={this.handleSlideChange}
                            ref={this.swiperRef}
                        >
                            <SwiperSlide>
                                <img src={History1} alt="History image" className="history__image" />
                                <p className="history__descr">
                                    Bcelerisque dapibus pharetra nibh semper iaculis duis viverra porttitor&nbsp;in. Eu&nbsp;nec vitae,
                                    malesuada
                                    vitae egestas integer et&nbsp;morbi. Maecenas sed quis diam posuere malesuada magnis. Bcelerisque dapibus.
                                    Eu&nbsp;nec vitae,
                                </p>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={History2} alt="History image" className="history__image" />
                                <p className="history__descr">
                                    Bcelerisque dapibus pharetra nibh semper iaculis duis viverra porttitor&nbsp;in. Eu&nbsp;nec vitae,
                                    malesuada
                                    vitae egestas integer et&nbsp;morbi. Maecenas sed quis diam posuere malesuada magnis. Bcelerisque dapibus.
                                    Eu&nbsp;nec vitae,
                                </p>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={History3} alt="History image" className="history__image" />
                                <p className="history__descr">
                                    Bcelerisque dapibus pharetra nibh semper iaculis duis viverra porttitor&nbsp;in. Eu&nbsp;nec vitae,
                                    malesuada
                                    vitae egestas integer et&nbsp;morbi. Maecenas sed quis diam posuere malesuada magnis. Bcelerisque dapibus.
                                    Eu&nbsp;nec vitae,
                                </p>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={History4} alt="History image" className="history__image" />
                                <p className="history__descr">
                                    Bcelerisque dapibus pharetra nibh semper iaculis duis viverra porttitor&nbsp;in. Eu&nbsp;nec vitae,
                                    malesuada
                                    vitae egestas integer et&nbsp;morbi. Maecenas sed quis diam posuere malesuada magnis. Bcelerisque dapibus.
                                    Eu&nbsp;nec vitae,
                                </p>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={History5} alt="History image" className="history__image" />
                                <p className="history__descr">
                                    Bcelerisque dapibus pharetra nibh semper iaculis duis viverra porttitor&nbsp;in. Eu&nbsp;nec vitae,
                                    malesuada
                                    vitae egestas integer et&nbsp;morbi. Maecenas sed quis diam posuere malesuada magnis. Bcelerisque dapibus.
                                    Eu&nbsp;nec vitae,
                                </p>
                            </SwiperSlide>
                            <SwiperSlide>className
                                <img src={History6} alt="History image" className="history__image" />
                                <p className="history__descr">
                                    Bcelerisque dapibus pharetra nibh semper iaculis duis viverra porttitor&nbsp;in. Eu&nbsp;nec vitae,
                                    malesuada
                                    vitae egestas integer et&nbsp;morbi. Maecenas sed quis diam posuere malesuada magnis. Bcelerisque dapibus.
                                    Eu&nbsp;nec vitae,
                                </p>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={History1} alt="History image" className="history__image" />
                                <p className="history__descr">
                                    Bcelerisque dapibus pharetra nibh semper iaculis duis viverra porttitor&nbsp;in. Eu&nbsp;nec vitae,
                                    malesuada
                                    vitae egestas integer et&nbsp;morbi. Maecenas sed quis diam posuere malesuada magnis. Bcelerisque dapibus.
                                    Eu&nbsp;nec vitae,
                                </p>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={History1} alt="History image" className="history__image" />
                                <p className="history__descr">
                                    Bcelerisque dapibus pharetra nibh semper iaculis duis viverra porttitor&nbsp;in. Eu&nbsp;nec vitae,
                                    malesuada
                                    vitae egestas integer et&nbsp;morbi. Maecenas sed quis diam posuere malesuada magnis. Bcelerisque dapibus.
                                    Eu&nbsp;nec vitae,
                                </p>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={History1} alt="History image" className="history__image" />
                                <p className="history__descr">
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