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
            this.props.tabsData.map(({ name, id }) => {
                const active = this.props.filter === name;
                const clazz = active ? 'tabs-nav__item tabs-nav__item_active' : 'tabs-nav__item';
                return (
                    <button
                        className={clazz}
                        type="button"
                        key={id}
                        onClick={(e) => checkActive(e, name)}>
                        <span>{name}</span>
                    </button>
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