import { Component } from 'react';
import SliderGellary from '../../components/slider-gallery/slider-gallery';


import { ReactComponent as Linked } from '../../assets/img/icons/social/linked.svg';
import { ReactComponent as Twitter } from '../../assets/img/icons/social/twitter.svg';
import { ReactComponent as Facebook } from '../../assets/img/icons/social/facebook.svg';



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
            case 'news':
                return 'hero-page hero-page_news';
                break;
            case 'post':
                return 'hero-page hero-page_post';
                break;
            default: return 'hero-page'
        }
    }

    classTitle = () => {
        const { title, titleMb, slider } = this.props;
        let clazz = slider || title.length > 16 ? 'title title_overLength hero-page__title' : 'title hero-page__title';
        switch (titleMb) {
            case 'mbProject':
                clazz += ' hero-page__title_mb-project';
                break;
            case 'mbPost':
                clazz += ' hero-page__title_mb-post';
                break;
            default: return clazz;
        }

        return clazz;
    }

    formatData = (dataString) => {
        const data = new Date(dataString);

        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return data.toLocaleDateString('en-US', options);
    }

    renderHeroPageArticleMeta = () => {
        return (
            <div class="hero-page__bottom">
                <div className="hero-page__meta article-meta small small_regular">
                    <a className='base base_bold article-meta__item article-meta__item_active' href="#">Industry news</a>
                    <time className='base base_regular article-meta__item' datetime='2024-06-24 19:00'>{this.formatData('2024-06-24 19:00')}</time>
                    <span className=' base base_regular article-meta__item article-meta__item_comments'>4 comments</span>
                </div>
                <ul class="social hero-page__social">
                    <li class="social__item">
                        <a href="#" target="_blank" class="social__link" aria-label="Facebook">
                            <Facebook />
                        </a>
                    </li>
                    <li class="social__item">
                        <a href="#" target="_blank" class="social__link" aria-label="Facebook">
                            <Linked />
                        </a>
                    </li>
                    <li class="social__item">
                        <a href="#" target="_blank" class="social__link" aria-label="Facebook">
                            <Twitter />
                        </a>
                    </li>
                </ul>
            </div>
        )
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
                    {page === 'post' ? this.renderHeroPageArticleMeta() : ''}

                </div>
            </section>
        )
    }
}

export default HeroPage;

