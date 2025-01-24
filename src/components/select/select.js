import React, { Component } from 'react';
import Choices from 'choices.js';
import './select.scss';
// import 'choices.js/public/assets/styles/choices.min.css';

class MySelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedValue: ''
    };
    this.selectElement = null;
  }

  componentDidMount() {
    this.choices = new Choices(this.selectElement, {
      shouldSort: false,
      position: 'bottom',
      // choices: this.props.options,
      // placeholder: true,
      placeholderValue: 'Choise',
      searchEnabled: false,
    });
    

    this.choices.passedElement.element.addEventListener('addItem', this.handleChoiceChange);
  }

  componentWillUnmount() {
    this.choices.destroy();
  }

  handleChoiceChange = (event) => {
    this.setState({ selectedValue: event.detail.value });
  };

  render() {
    return (
      <div className="choices">
        <select
          name={this.props.name}
          className="my-select"
          ref={(element) => { this.selectElement = element; }}
        >
          {this.props.options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <div className="choices__button"></div>
      </div>
    );
  }
}

export default MySelect;