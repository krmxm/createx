import { Component } from 'react';

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
            default: return 'hero-page'
        }
    }

    render() {
        const { title, descr, page } = this.props;
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
                    <h1 className="title hero-page__title">{title}</h1>
                    <p className="lead lead_regular hero-page__descr">{descr}</p>
                </div>
            </section>
        )
    }
}

export default HeroPage;

