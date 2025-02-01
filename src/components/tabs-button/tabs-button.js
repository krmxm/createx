import { Component } from 'react';

import './tabs-button.scss'


class TabsButton extends Component {
    constructor(props) {
        super(props);
    }

    buttons = (classForTabsItem, classForTabsBtn) => {
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
                const clazz = active ? `${classForTabsBtn} ${classForTabsBtn}_active` : `${classForTabsBtn}`;
                return (
                    <li className={`tabs-nav__item ${classForTabsItem}`}>
                        <button
                            className={`btn-reset tabs-nav__btn ${clazz}`}
                            type="button"
                            key={id}
                            onClick={(e) => checkActive(e, name)}>
                            {icon ? <span className="tabs-nav__icon">{icon}</span> : ''}
                            <span className='base base_bold tabs-nav__text'>{name}</span>
                        </button>

                    </li>
                )
            })
        )
    }

    render() {
        const { classForTabsList, classForTabsItem, classForTabsBtn } = this.props;
        return (
            <ul className={`tabs-nav ${classForTabsList}`}>
                {this.buttons(classForTabsItem, classForTabsBtn)}
            </ul>
        )
    }
}

export default TabsButton;