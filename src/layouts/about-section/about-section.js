import { Component } from 'react';

import VideoBlock from '../../components/video-block/video-block';

import './about-section.scss';

class AboutSection extends Component {
    constructor(prop) {
        super(prop);
    }

    render() {
        return (
            <section className="about-section section-offset">
                <div className="container">
                    <h2 className="title title_h2 title_h2-center">We are Createx Construction Bureau </h2>
                    <p className="large large_regular large_center large_section-descr-mb">We&nbsp;are rightfully considered to&nbsp;be&nbsp;the best construction company in&nbsp;the USA.</p>
                    <VideoBlock />
                </div>
            </section>
        )
    }
}

export default AboutSection;