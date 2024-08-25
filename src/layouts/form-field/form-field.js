import { Component } from 'react';
import Forms from '../../components/forms/forms';


import './form-field.scss';

class ContactsSection extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="contacts-section">
                <div className="container contacts-section__container">
                <h2 className="title title_regular title_regular-center visually-hidden">Contacts</h2>
                <form className='contacts-section__form' action="#">
                        <h3 className="title title_small title_small-center">A&nbsp;quick way to&&nbsp;discuss details</h3>
                        <Forms
                            isVertical={true}
                            isPhone={true}
                            isEmail={true}
                            isMessage={true}
                            isCheckBox={true}
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