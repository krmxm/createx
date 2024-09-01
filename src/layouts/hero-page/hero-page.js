import { Component } from 'react';

import './hero-page.scss';

class HeroPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { title, descr, inner } = this.props;
        return (
            <section className={inner ? 'hero-page hero-page_inner' : 'hero-page'}>
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

