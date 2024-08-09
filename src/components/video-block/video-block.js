import { Component } from 'react';

import './vedio-block.scss';

class VideoBlock extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="video-block">
                <button className='btn-reset video-block__play' aria-label="Play video">
                    <svg>
                        <use href="../../assets/img/sprite.svg#play"></use>
                    </svg>
                </button>
                <button className='btn-reset video-block__muted' aria-label="Mute video"></button>
                <video src="" muted loop preload="metadata"></video>
            </div>
        )
    }
}

export default VideoBlock;