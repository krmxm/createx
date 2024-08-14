import { Component } from 'react';

import './forms.scss';

class Forms extends Component {
    constructor(props) {
        super(props);
    }

    name = () => {
        return (
            <label className="form__field">
                <span className='form__label-text small small_regular'>{this.props.isImportantField ? 'Name*' : 'Name'}</span>
                <input className='form__input' type="text" placeholder='Your name' name='name' id='name' />
            </label>
        );
    }

    phone = () => {
        return (
            <label className="form__field">
                <span className='form__label-text small small_regular'>{this.props.isImportantField ? 'Phone*' : 'Phone'}</span>
                <input className='form__input' type="number" placeholder='Your phone' name='phone' id='phone' />
            </label>
        );
    }

    email = () => {
        return (
            <label className="form__field">
                <span className='form__label-text small small_regular'>{this.props.isImportantField ? 'Email*' : 'Email'}</span>
                <input className='form__input' type="email" placeholder='Your working email' name='email' id='email' />
            </label>
        );
    }

    message = () => {
        const classMessage = this.props.isHorizontal ? 'form__field form__field_big' : 'form__field';
        return (
            <label className={classMessage}>
                <span className='form__label-text small small_regular'>{this.props.isImportantField ? 'Message*' : 'Message'}</span>
                <input className='form__input' type="text" placeholder='Your message' name='message' id='message' />
            </label>
        );
    }

    render() {
        const classOrientation = this.props.isVertical ? 'flex-column-start' : 'flex-v-end';
        const buttonClass = this.props.buttonClass;
        const buttonText = this.props.buttonText;
        return (
            <div className="form__content">
                {this.name()}
                {this.props.isPhone ? this.phone() : ''}
                {this.props.isEmail ? this.email() : ''}
                {this.props.isMessage ? this.message() : ''}
                <button className={buttonClass} type='submit'>{buttonText}</button>
            </div>
        )
    }
}

export default Forms;