import { Component } from 'react';
import SliderGellary from '../../components/slider-gallery/slider-gallery';


import './hero-page.scss';

class HeroPage extends Component {
    constructor(props) {
        super(props);
    }

    setClassSection = (page) => {
        switch (page) {
            case 'services':
                return 'hero-page hero-page_services';
                break;
            case 'inner':
                return 'hero-page hero-page_inner';
                break;
            case 'work':
                return 'hero-page hero-page_work';
                break;
            case 'about-us':
                return 'hero-page hero-page_about-us';
                break;
            case 'some-project':
                return 'hero-page hero-page_some-project';
                break;
            case 'positions':
                return 'hero-page hero-page_positions';
                break;
            default: return 'hero-page'
        }
    }

    classTitle = () => {
        const { title, titleMb, slider } = this.props;
        let clazz = slider ? 'title title_overLength hero-page__title' : 'title hero-page__title';
        if (titleMb) {
            clazz += ' hero-page__title_mb';
        }
        return clazz;
    }

    render() {
        const { title, descr, page, titleMb, slider } = this.props;
        const classTitle = title.length > 8 ? 'title title_overLength hero-page__title' : 'title hero-page__title';
        const classTitleMb = titleMb ? 'hero-page__title_mb' : '';
        return (
            <section className={this.setClassSection(page)}>
                <div className="container">
                    <ul className="breadcrumbs hero-page__breadcrumbs">
                        <li className="breadcrumbs__item">
                            <a href="#" className="small small_regular breadcrumbs__link hero-services__breadcrumbs">Homepage</a>
                        </li>
                        <li className="breadcrumbs__item">
                            <a className="small small_regular breadcrumbs__link">Services</a>
                        </li>
                    </ul>
                    <h1 className={this.classTitle()}>{title}</h1>
                    {descr ? <p className="lead lead_regular hero-page__descr">{descr}</p> : null}
                    {slider ? <SliderGellary /> : null}


                </div>
            </section>
        )
    }
}

export default HeroPage;

