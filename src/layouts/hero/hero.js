import { Component } from 'react';

import './hero.scss';

class Hero extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className="hero">
                <div className="container">
                    <div className="hero__content">
                        <h1 className="main-title main-title_home">Create<span>x</span> Construction</h1>
                        <p className="main-descr main-descr_home">
                            Cras ultrices leo vitae non viverra. Fringilla nisi quisque consequat, dignissim vitae proin ipsum sed. Pellentesque nec turpis purus eget pellentesque integer ipsum elementum felis.
                        </p>
                        <div className="hero__btns">
                            <button className='btn-reset btn btn_stroke btn_stroke-light'>Learn more about us</button>
                            <button className='btn-reset btn btn_fill'>Submit Request</button>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Hero;