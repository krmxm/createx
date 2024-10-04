import { Component } from 'react';

import './forms.scss';

class Forms extends Component {
    constructor(props) {
        super(props);
    }

    name = (classForSection) => {
        const classOrientation = this.props.isVertical ? '_vertical' : '_horizontal';
        return (
            <label className={`form__field form__field_${classForSection}`}>
                <span className='form__label-text small small_regular'>{this.props.isImportantField ? 'Name*' : 'Name'}</span>
                <input className='form__input' type="text" placeholder='Your name' name='name' id='name' />
            </label>
        );
    }

    phone = (classForSection) => {
        const classOrientation = this.props.isVertical ? '_vertical' : '_horizontal';
        return (
            <label className={`form__field form__field_${classForSection}`}>
                <span className='form__label-text small small_regular'>{this.props.isImportantField ? 'Phone*' : 'Phone'}</span>
                <input className='form__input' type="number" placeholder='Your phone number' name='phone' id='phone' />
            </label>
        );
    }

    email = (classForSection) => {
        const classOrientation = this.props.isVertical ? '_vertical' : '_horizontal';
        return (
            <label className={`form__field form__field_${classForSection}`}>
                <span className='form__label-text small small_regular'>{this.props.isImportantField ? 'Email*' : 'Email'}</span>
                <input className='form__input' type="email" placeholder='Your working email' name='email' id='email' />
            </label>
        );
    }

    message = (classForSection) => {
        const classMessage = this.props.isHorizontal ? '_big' : '';
        const classOrientation = this.props.isVertical ? '_vertical' : '_horizontal';
        return (
            <label className={`form__field form__field_${classForSection}-message form__field_${classForSection}`}>
                <span className='form__label-text small small_regular'>{this.props.isImportantField ? 'Message*' : 'Message'}</span>
                <textarea className={`form__input form__input_${classForSection}`} type="text" placeholder='Your message' name='message' id='message' />
            </label>
        );
    }

    comment = (classForSection) => {
        return (
            <label className={`form__field form__field_${classForSection}-comment form__field_${classForSection}`}>
                <span className='form__label-text small small_regular'>Your comment*</span>
                <textarea className={`form__input form__input_${classForSection}`} type="text" placeholder='Type comment here' name='message' id='message' />
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

    selectOrintation = (isOrientation) => {
         switch(isOrientation) {
            case 'horizontal': {
                return 'horizontal'
                break;
            }
            case 'vertical': {
                return 'vertical'
                break;
            }
            case 'grid': {
                return 'grid'
                break;
            }
            default: {
                return '';
            }
         }
    }

    render() {
        const {classForSection, isOrientation} = this.props;
        const classOrientation = this.props.isVertical ? '_vertical' : '_horizontal';
        const buttonClass = this.props.buttonClass;
        const buttonText = this.props.buttonText;
        return (
            <div className={`form__content form__content_${this.selectOrintation(isOrientation)}`}>
                {this.name(classForSection)}
                {this.props.isPhone ? this.phone(classForSection) : ''}
                {this.props.isEmail ? this.email(classForSection) : ''}
                {this.props.isMessage ? this.message(classForSection) : ''}
                {this.props.isCheckBox ? this.checkBox(classForSection) : ''}
                {this.props.isComment ? this.comment(classForSection) : ''}
                {classForSection ? <div className="centered"><button className={buttonClass} type='submit'>{buttonText}</button></div> : <button className={buttonClass} type='submit'>{buttonText}</button>}
            </div>
        )
    }
}

export default Forms;