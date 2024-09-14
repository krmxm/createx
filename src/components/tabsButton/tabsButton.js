import { Component } from 'react';

import './tabsButton.scss'


class TabsButton extends Component {
    constructor(props) {
        super(props);
    }

    buttons = () => {
        const checkActive = (e, name) => {
            const targetClassList = e.target.classList;
            if (targetClassList && targetClassList.contains('props-class_active')) {
                this.props.onFilterSelect('');
            } else {
                this.props.onFilterSelect(name);
            }
        }
        return (
            this.props.tabsData.map(({ id, name, icon }) => {
                const active = this.props.filter === name;
                const clazz = active ? 'tabs-nav__btn tabs-nav__btn_active' : 'tabs-nav__btn';
                return (
                    <li className='tabs-nav__item'>
                        <button
                            className={`btn-reset ${clazz}`}
                            type="button"
                            key={id}
                            onClick={(e) => checkActive(e, name)}>
                            <span className="tabs-nav__icon">{icon}</span>
                            <span className='base base_bold tabs-nav__text'>{name}</span>
                        </button>

                    </li>
                )
            })
        )
    }

    render() {
        const { classForTabsList, classForTabsItem } = this.props;
        return (
            <ul className={`tabs-nav ${classForTabsList}`}>
                {this.buttons()}
            </ul>
        )
    }
}

export default TabsButton;