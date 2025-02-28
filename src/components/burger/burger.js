import { Component } from 'react';
import './burger.scss';

// components/burger/burger.jsx
class Burger extends Component {
  render() {
    const { isActive, onClick } = this.props;
    
    return (
      <button 
        className={`btn-reset burger ${isActive ? 'burger--active' : ''}`}
        onClick={onClick} // Важно: пропс должен быть здесь
      >
        <span className="burger__line"></span>
      </button>
    );
  }
}

export default Burger;