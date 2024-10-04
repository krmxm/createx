import { Component } from 'react';

import Forms from '../forms/forms';

import './post-form.scss';

class PostForm extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <form className="post-form">
                <h2 className="title title_h2 title_h2-center post-form__title">Leave your comment</h2>
                <Forms
                            isOrientation='grid'
                            isEmail={true}
                            isComment={true}
                            classForSection='post'
                            buttonClass={'btn-reset btn btn_size-regular btn_theme-primary'}
                            buttonText={'Post comment'}
                        />
            </form>
        )
    }
}

export default PostForm;