import { Component } from 'react';

import { ReactComponent as Map } from '../../assets/img/map/map.svg';


import './world-map.scss';

class WorldMap extends Component {
    constructor (props) {
        super(props);
        this.state = {
            currentCountry: 0, // Индекс текущей подсвечиваемой страны
        };
        this.countries = ['russia', 'usa', 'canada', 'germany', 'china', 'ukraina', 'australia'];
    }

    componentDidMount() {
        // Запуск интервала для автоматической смены стран
        this.interval = setInterval(() => {
          this.setState((prevState) => ({
            currentCountry: (prevState.currentCountry + 1) % this.countries.length,
          }));
        }, 1000); // Интервал смены страны (1 секунда)
      }
    
      componentDidMount() {
        // Запуск интервала для автоматической смены стран
        this.interval = setInterval(() => {
          this.setState((prevState) => ({
            currentCountry: (prevState.currentCountry + 1) % this.countries.length,
          }));
        }, 2000); // Интервал смены страны (1 секунда)
      }
    
      componentDidUpdate(prevProps, prevState) {
        // Убираем подсветку с предыдущей страны
        if (prevState.currentCountry !== this.state.currentCountry) {
          const prevCountry = this.countries[prevState.currentCountry];
          const prevElements = document.querySelectorAll(`.${prevCountry}`);
          prevElements.forEach((element) => {
            element.classList.remove('highlighted');
          });
        }
    
        // Подсвечиваем текущую страну
        const currentCountry = this.countries[this.state.currentCountry];
        const currentElements = document.querySelectorAll(`.${currentCountry}`);
        currentElements.forEach((element) => {
          element.classList.add('highlighted');
        });
      }
    
      componentWillUnmount() {
        // Очистка интервала при размонтировании компонента
        clearInterval(this.interval);
      }

    render() {
        const { currentCountry } = this.state;

        return(
            <div className="world-map">
                <div className="container">
                    <h2 className="title title_h2 title_h2-center world-map__title">We work worldwibe</h2>
                    <div className="world-map__map">
                        <Map />
                    </div>
                </div>
            </div>
        )
    }
}

export default WorldMap;