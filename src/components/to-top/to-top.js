import React, { Component } from 'react';
import { Link, Element } from 'react-scroll';
import './to-top.scss';

// Импортируйте иконку отдельно (пример)
import { ReactComponent as ArrowUpIcon } from '../../assets/img/icons/go-top.svg';


class GoTop extends Component {
  render() {
    return (
      <Link
        to="top"
        smooth={true}
        duration={1200}
        className="to-top"
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