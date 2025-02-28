import './overlay.scss';

const Overlay = ({ onClick }) => (
  <div className="overlay overlay--active" onClick={onClick} />
);

export default Overlay;