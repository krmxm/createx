import { Component } from 'react';
// import { ReactComponent as Sprite } from '../../assets/img/sprite.svg';
// import sprite from '../../assets/img/sprite.svg';
import { ReactComponent as Play } from '../../assets/img/sprite/play.svg';

import './vedio-block.scss';

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
                <button className='btn-reset video-block__muted' aria-label="Mute video"></button>
                <video src="" muted loop preload="metadata"></video>
            </div>
        )
    }
}

export default VideoBlock;