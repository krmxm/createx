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
            slideWidth: 390, // Начальная ширина слайда
            slideMarginRight: 30, // Начальный отступ между слайдами
            visibleSlides: 3, // Количество видимых слайдов по умолчанию
            prevBtnActive: false,
            nextBtnActive: true,
            // В конструкторе:
            breakpoints: {
                0: { slideWidth: 200, slideMarginRight: 10, visibleSlides: 1 }, // Fallback
                480: { slideWidth: 200, slideMarginRight: 10, visibleSlides: 2 },
                748: { slideWidth: 250, slideMarginRight: 15, visibleSlides: 2 },
                1024: { slideWidth: 300, slideMarginRight: 20, visibleSlides: 2 },
                1280: { slideWidth: 300, slideMarginRight: 20, visibleSlides: 3 },
                1440: { slideWidth: 350, slideMarginRight: 20, visibleSlides: 3 }
              }
        };
    }

    componentDidMount() {
        this.handleResize(); // Первоначальный вызов
        window.addEventListener('resize', this.handleResize);
        console.log("Initial window width:", window.innerWidth); // Проверка ширины при загрузке
        this.startAutoplay();
        console.log("Первоначальная ширина окна:", window.innerWidth);
         this.updateBreakpoints();
        window.addEventListener('resize', this.updateBreakpoints);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
        this.stopAutoplay();
        window.removeEventListener('resize', this.updateBreakpoints); // Убираем слушатель при размонтировании
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.visibleSlides !== this.state.visibleSlides) {
          this.setState({
            offset: 0,
            currentSlide: 0
          });
        }
      }

      handleResize = () => {
        clearTimeout(this.resizeTimer);
        this.resizeTimer = setTimeout(() => {
          this.updateBreakpoints();
        }, 100);
      }

      updateBreakpoints = () => {
        const { breakpoints } = this.state;
        const windowWidth = window.innerWidth;
      
        // Сортируем брейкпоинты по УБЫВАНИЮ (от большего к меньшему)
        const sortedBreakpoints = Object.keys(breakpoints)
          .map(Number)
          .sort((a, b) => b - a);
      
        console.log("sortedBreakpoints:", sortedBreakpoints); // Для отладки
      
        let activeBreakpoint = 0;
        for (const breakpoint of sortedBreakpoints) {
          console.log(`Checking ${breakpoint}px vs ${windowWidth}px`); // Отладка
          if (windowWidth >= breakpoint) {
            activeBreakpoint = breakpoint;
            break; // Прерываем цикл после нахождения первого подходящего
          }
        }
      
        console.log("Active breakpoint:", activeBreakpoint); // Отладка
      
        const { 
          slideWidth: newSlideWidth,
          slideMarginRight: newSlideMarginRight,
          visibleSlides: newVisibleSlides 
        } = breakpoints[activeBreakpoint];
      
        // Обновляем состояние
        this.setState({
          slideWidth: newSlideWidth,
          slideMarginRight: newSlideMarginRight,
          visibleSlides: newVisibleSlides,
          currentSlide: 0,
          offset: 0
        }, () => {
          console.log("Updated visibleSlides:", this.state.visibleSlides);
        });
      };

    startAutoplay() {
        this.autoplayInterval = setInterval(this.nextSlide, 2500);
    }
    stopAutoplay() {
        clearInterval(this.autoplayInterval);
    }

    handleMouseEnter = () => {
        this.stopAutoplay(); // Останавливаем автопрокрутку при наведении
    }

    handleMouseLeave = () => {
        this.startAutoplay(); // Возобновляем автопрокрутку при удалении курсора
    }

    calcWidthInner() {
        const { slideWidth, slideMarginRight, totalSlides, visibleSlides } = this.state;
        return (slideWidth + slideMarginRight) * totalSlides - slideMarginRight; // Убираем отступ у последнего видимого слайда
    }

    calcWidthWrapp() {
        const { slideWidth, slideMarginRight, totalSlides, visibleSlides } = this.state;
        return (slideWidth + slideMarginRight) * visibleSlides - slideMarginRight; // Убираем отступ у последнего видимого слайда
    }

    updateButtonStates = (newOffset) => {
        const { slideWidth, slideMarginRight, totalSlides, visibleSlides } = this.state;
        const maxOffset = (slideWidth + slideMarginRight) * (totalSlides - visibleSlides);
      
        this.setState({
          prevBtnActive: newOffset > 0,
          nextBtnActive: newOffset < maxOffset
        });
      };

    isSlideVisible(index) {
        const { currentSlide, visibleSlides } = this.state;
        return index >= currentSlide && index < currentSlide + visibleSlides;
    }
    
    nextSlide = () => {
        this.setState(state => {
          const maxOffset = (state.slideWidth + state.slideMarginRight) * 
            (state.totalSlides - state.visibleSlides);
          const newOffset = state.offset >= maxOffset
            ? 0
            : state.offset + (state.slideWidth + state.slideMarginRight);
          const newCurrentSlide = state.currentSlide >= state.totalSlides - state.visibleSlides
            ? 0
            : state.currentSlide + 1;
      
          return { offset: newOffset, currentSlide: newCurrentSlide };
        }, () => {
          this.updateButtonStates(this.state.offset);
        });
      };
    
    prevSlide = () => {
        this.setState(state => {
            const maxOffset = (state.slideWidth + state.slideMarginRight) * (state.totalSlides - state.visibleSlides);
            const newOffset = state.offset === 0
                ? maxOffset
                : state.offset - (state.slideWidth + state.slideMarginRight);
            const newCurrentSlide = state.currentSlide === 0
                ? state.totalSlides - state.visibleSlides
                : state.currentSlide - 1;
    
            this.updateButtonStates(newOffset);
    
            return {
                offset: newOffset,
                currentSlide: newCurrentSlide
            };
        });
    };

    renderSlides() {
        const { slideWidth, slideMarginRight, currentSlide, visibleSlides } = this.state;
        const lastVisibleSlideIndex = currentSlide + visibleSlides - 1; // Индекс последнего видимого слайда
    
        return this.props.slides.map(({ title, descr, picture }, index) => {
            const isVisible = this.isSlideVisible(index);
            const isLastVisibleSlide = index === lastVisibleSlideIndex; // Проверяем, является ли слайд последним видимым
    
            return (
                <div
                    key={index}
                    style={{
                        marginRight: isLastVisibleSlide ? 0 : `${slideMarginRight}px`, // Убираем отступ у последнего видимого слайда
                        width: `${slideWidth}px`,
                        opacity: isVisible ? 1 : 0,
                        visibility: isVisible ? 'visible' : 'hidden',
                        transition: 'opacity 0.5s ease, visibility 0.5s ease'
                    }}
                >
                    <a href="#" className="slider__item">
                        <div className="slider__img">
                            <img className='slider__img' src={picture} alt="Portfolio cover" />
                        </div>
                        <div className="slider__content">
                            <h3 className='lead lead_bold'>{title}</h3>
                            <span className='small small_regular'>{descr}</span>
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
            <div className="slider" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
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
                <div className="slider__wrapper portfolio-section__items" style={{ width: `${this.calcWidthWrapp()}px`}}>
                    <div className="slider__inner" style={{ width: `${this.calcWidthInner()}px`, transform: `translateX(-${offset}px)`, transition: 'transform 0.5s ease-in-out' }}>
                        {this.renderSlides(slideMarginRight)}
                    </div>
                </div>
            </div>
        );
    }
}

export default SliderMini;
