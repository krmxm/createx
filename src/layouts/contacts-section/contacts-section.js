import { Component } from 'react';
import Forms from '../../components/forms/forms';


import './contacts-section.scss';

class ContactsSection extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="contacts-section">
                <h2 className="title title_h2 title_h2-center visually-hidden">Contacts</h2>

                <div className="container contacts-section__container">
                    <form className='contacts-section__form' action="#">
                        <h3 className="title title_h4 title_h4-center title_h4-form">A&nbsp;quick way to&nbsp;discuss details</h3>
                        <Forms
                            isOrientation='vertical'
                            isPhone={true}
                            isEmail={true}
                            isMessage={true}
                            isCheckBox={true}
                            classForSection='contacts'
                            buttonClass={'btn-reset btn btn_size-regular btn_theme-primary'}
                            buttonText={'send request'}
                        />
                    </form>
                </div>
            </div>
        )
    }
}

export default ContactsSection;