import { Component } from 'react';

import './learn-more.scss';

class LearnMore extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const clazz = `learn-more ${this.props.classLearnMore || ''}`;
        const title = this.props.title;
        const textBtn = this.props.textBtn;
        return (
            <div className={clazz}>
                <h3 className="title title_small title_small-center learn-more__subtitle">{title}</h3>
                <a href="#" className="learn-more__btn btn-reset btn btn_size-large btn_theme-primary">{textBtn}</a>
            </div>
        )
    }
}

export default LearnMore;