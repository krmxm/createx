import { Component } from 'react';

import Woman from '../../assets/img/contacts-page/woman.jpeg'

import './contacts-form.scss';

class ContactsForm extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section class="contacts">
                <div class="container">
                <h2 class="title title_h2 title_h2-center">Contact us</h2>
                <p class="large large_regular large_center large_section-descr-mb">Please complete the form. Detailed information will help&nbsp;us to&nbsp;make
                    a&nbsp;tuned offer.</p>
                <div class="contacts__content">
                    <img class="contacts__image" src={Woman} alt="woman" aria-hidden="true" />
                    <form action="#" class="form-contacts">
                    <div class="form-contacts__line">
                        <label class="form-field form-field--gray form-contacts__field">
                        <span class="form-field__caption">Name*</span>
                        <input type="text" name="name" required placeholder="Your name" class="form-field__input base base_regular" />
                        </label>

                        <label class="form-field form-field--gray form-contacts__field">
                        <span class="form-field__caption">I am interested in</span>
                        <select name="insterested" class="form-field__select">
                            <option value="">Choose interested</option>
                            <option value="Interior_Design">Interior Design</option>
                            {/* Почему в value нужно ставить пробел? */}
                        </select>
                        </label>

                    </div>
                    <div class="form-contacts__line">
                        <label class="form-field form-field--gray form-contacts__field">
                        <span class="form-field__caption">Phone*</span>
                        <input type="tel" name="phone" required placeholder="Your phone number" class="form-field__input base base_regular" />
                        </label>

                        <label class="form-field form-field--gray form-contacts__field">
                        <span class="form-field__caption">Location</span>
                        <select name="location" class="form-field__select" required>
                            <option value="">Choose location</option>
                            <option value="New_York">New York</option>
                        </select>
                        </label>
                    </div>
                    <div class="form-contacts__line">
                        <label class="form-field form-field--gray form-contacts__field">
                        <span class="form-field__caption">Email</span>
                        <input type="email" name="email" placeholder="Your working email" class="form-field__input base base_regular" />
                        </label>

                        <fieldset class="form-field form-contacts__fields">
                            <legend class="form-field__caption">Preferred contact method</legend>
                            {/* wtf */}
                            <div class="form-field__flex">
                                <label class="custom-radio form-contacts__radio">
                                <input type="radio" name="contact_method" value="Phone" class="custom-radio__input" />
                                <span class="custom-radio__text">Phone</span>
                                </label>
                                <label class="custom-radio form-contacts__radio">
                                <input type="radio" name="contact_method" value="Email" class="custom-radio__input" />
                                <span class="custom-radio__text">Email</span>
                                </label>
                                <label class="custom-radio form-contacts__radio">
                                <input type="radio" name="contact_method" value="Viber" class="custom-radio__input" />
                                <span class="custom-radio__text">Viber</span>
                                </label>
                            </div>
                        </fieldset>
                    </div>

                    <label class="form-field form-field--gray form-contacts__field form-contacts__field--big">
                        <span class="form-field__caption">Message*</span>
                        <textarea name="message" placeholder="Your message"
                        class="form-field__input form-field__input_big base base_regular"></textarea>
                    </label>
                    
                    <div class="form-contacts__bottom">
                        <label class="custom-checkbox form-contacts__checkbox">
                        <input type="checkbox" class="custom-checkbox__input" />
                        <span class="custom-checkbox__text">I agree to receive communications from Createx Construction
                            Bureau.</span>
                        </label>
                        <button class="form-contacts__btn btn btn_size-large btn_theme-primary" type="submit">Send Request</button>
                    </div>
                    </form>
                </div>
                </div>
                </section>
        )
    }
}

export default ContactsForm;