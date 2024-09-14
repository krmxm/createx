import { Component } from 'react';


class Tabs extends Component {
    constructor(props) {
        super(props);
    }

    onFilterSelect(filter) {
        this.setState({ filter });
    }
}

export default Tabs;