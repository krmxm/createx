import { Component } from 'react';

import Header from '../../layouts/header/header';
import HeroPage from '../../layouts/hero-page/hero-page';
import PostArticle from '../../layouts/post/post';
import ContactsSection from '../../layouts/contacts-section/contacts-section';
import Footer from '../../layouts/footer/footer';


class PostPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const headerClassMod = 'header_secondary';
        return (
            <>
                <Header headerClassMod={headerClassMod} />
                <HeroPage title='How to Build Climate Change-Resilient Infrastructure' titleMb='mbPost' page='post' />
                <PostArticle />
                <ContactsSection />
                <Footer />
            </>
        )
    }
}

export default PostPage;