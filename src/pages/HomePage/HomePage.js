import { Component } from 'react';

import Header from '../../layouts/header/header';
import Hero from '../../layouts/hero/hero';

import './HomePage.scss';


class HomePage extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        const headerClassMod = 'header_main'
        return (
            <>
                <Header headerClassMod={headerClassMod} />
                <Hero />
            </>
        )
    }
}

export default HomePage;
