import { Component } from 'react';

import './post-form.scss';

class PostForm extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <form className="post-form">
                <h2 className="title title_h2 title_h2-center post-form__title">Leave your comment</h2>
                <div className="post-form__content">
                    <label className="form-field form-field--gray post-form__field">
                        <span className="form-field__caption">Name*</span>
                        <input type="email" name="email" required placeholder="Your name" className="form-field__input" />
                    </label>
                    <label className="form-field form-field--gray post-form__field">
                        <span className="form-field__caption">Email*</span>
                        <input type="email" name="email" required placeholder="Your working email" className="form-field__input" />
                    </label>
                    <label className="form-field form-field--gray post-form__field post-form__field--big">
                        <span className="form-field__caption">Your comment*</span>
                        <textarea name="message" placeholder="Type comment here" className="form-field__input form-field__input--big"></textarea>
                    </label>
                    <div className="centered">
                        <button className="btn-reset btn btn--fill post-form__btn">Post comment</button>
                    </div>
                </div>
            </form>
        )
    }
}

export default PostForm;