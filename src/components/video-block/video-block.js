import { Component } from 'react';
// import { ReactComponent as Sprite } from '../../assets/img/sprite.svg';
// import sprite from '../../assets/img/sprite.svg';
import { ReactComponent as Play } from '../../assets/img/sprite/play.svg';
import { ReactComponent as Mute } from '../../assets/img/sprite/mute.svg';
import Video from '../../assets/video/about-video.mp4';


import './video-block.scss';

class VideoBlock extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="video-block">
                <button className='btn-reset video-block__play' aria-label="Play video">
                    <Play />
                </button>
                <button className='btn-reset video-block__muted' aria-label="Mute video">
                    <Mute />
                </button>
                <video className='video-block__content' src={Video} muted loop preload="metadata"></video>
            </div>
        )
    }
}

export default VideoBlock;