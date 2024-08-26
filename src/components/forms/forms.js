import { Component } from 'react';

import './forms.scss';

class Forms extends Component {
    constructor(props) {
        super(props);
    }

    name = () => {
        const classOrientation = this.props.isVertical ? '_vertical' : '_horizontal';
        return (
            <label className={`form__field form__field${classOrientation}`}>
                <span className='form__label-text small small_regular'>{this.props.isImportantField ? 'Name*' : 'Name'}</span>
                <input className='form__input' type="text" placeholder='Your name' name='name' id='name' />
            </label>
        );
    }

    phone = () => {
        const classOrientation = this.props.isVertical ? '_vertical' : '_horizontal';
        return (
            <label className={`form__field form__field${classOrientation}`}>
                <span className='form__label-text small small_regular'>{this.props.isImportantField ? 'Phone*' : 'Phone'}</span>
                <input className='form__input' type="number" placeholder='Your phone number' name='phone' id='phone' />
            </label>
        );
    }

    email = () => {
        const classOrientation = this.props.isVertical ? '_vertical' : '_horizontal';
        return (
            <label className={`form__field form__field${classOrientation}`}>
                <span className='form__label-text small small_regular'>{this.props.isImportantField ? 'Email*' : 'Email'}</span>
                <input className='form__input' type="email" placeholder='Your working email' name='email' id='email' />
            </label>
        );
    }

    message = () => {
        const classMessage = this.props.isHorizontal ? '_big' : '';
        const classOrientation = this.props.isVertical ? '_vertical' : '_horizontal';
        return (
            <label className={`form__field form__field${classOrientation}-message form__field${classOrientation}`}>
                <span className='form__label-text small small_regular'>{this.props.isImportantField ? 'Message*' : 'Message'}</span>
                <textarea className={`form__input form__input${classOrientation}`} type="text" placeholder='Your message' name='message' id='message' />
            </label>
        );
    }

    checkBox = () => {
        return (
            <label class="custom-checkbox form__checkbox">
                <input type="checkbox" class="custom-checkbox__input" />
                <span class="custom-checkbox__text small small_regular">I agree to receive communications from Createx Construction Bureau.</span>
            </label>
        )
    }

    render() {
        const classOrientation = this.props.isVertical ? '_vertical' : '_horizontal';
        const buttonClass = this.props.buttonClass;
        const buttonText = this.props.buttonText;
        return (
            <div className={`form__content form__content${classOrientation}`}>
                {this.name()}
                {this.props.isPhone ? this.phone() : ''}
                {this.props.isEmail ? this.email() : ''}
                {this.props.isMessage ? this.message() : ''}
                {this.props.isCheckBox ? this.checkBox() : ''}
                <button className={buttonClass} type='submit'>{buttonText}</button>
            </div>
        )
    }
}

export default Forms;