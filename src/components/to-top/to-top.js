import React, { Component } from 'react';
import { Link, Element } from 'react-scroll';
import throttle from 'lodash.throttle';
import './to-top.scss';

// Импортируйте иконку отдельно (пример)
import { ReactComponent as ArrowUpIcon } from '../../assets/img/icons/go-top.svg';


class GoTop extends Component {
  constructor(props) {
    super(props);
    this.state = { isVisible: false };
    this.scrollThreshold = this.props.scrollThreshold || 300; // Порог по умолчанию 300px
    this.checkScroll = throttle(this.handleScroll.bind(this), 200);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.checkScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.checkScroll);
  }

  handleScroll() {
    const scrolled = window.pageYOffset;
    this.setState({ isVisible: scrolled > this.scrollThreshold });
  }

  render() {
    return (
      <Link
        to="top"
        smooth={true}
        duration={500}
        className={`to-top ${this.state.isVisible ? 'visible' : ''}`}
      >
        <span className="small small_regular to-top__text">Go to top</span>
        <span className="to-top__icon">
          <ArrowUpIcon />
        </span>
      </Link>
    );
  }
}

export default GoTop;