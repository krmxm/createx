import { Component } from 'react';

import './forms.scss';

class Forms extends Component {
    constructor(props) {
        super(props);
    }

    name = () => {
        return (
            <label className="form__field">
                <span className='form__label-text'>{this.props.isImportantField ? 'Name*' : 'Name'}</span>
                <input className='form__input' type="text" placeholder='Your name' name='name' id='name' />
            </label>
        );
    }

    phone = () => {
        return (
            <label className="form__field">
                <span className='form__label-text'>{this.props.isImportantField ? 'Phone*' : 'Phone'}</span>
                <input className='form__input' type="number" placeholder='Your phone number' name='phone' id='phone'/>
            </label>
        );
    }

    email = () => {
        return (
            <label className="form__field">
                <span className='form__label-text'>{this.props.isImportantField ? 'Email*' : 'Email'}</span>
                <input className='form__input' type="email" placeholder='Your working email' name='email' id='email'/>
            </label>
        );
    }

    message = () => {
        return (
            <label className="form__field">
                <span className='form__label-text'>{this.props.isImportantField ? 'Message*' : 'Message'}</span>
                <input className='form__input' type="text" placeholder='Your message' name='message' id='message'/>
            </label>
        );
    }

    render() {
        const classOrientation = this.props.isVertical ? 'flex-column-start' : 'flex-v-end'; 
        return(
            <div className="form__content">
                {this.name()}
                {this.props.isPhone ? this.phone() : ''}
                {this.props.isEmail ? this.email() : ''}
                {this.props.isMessage ? this.message() : ''}
            </div>
        )
    }
}

export default Forms;