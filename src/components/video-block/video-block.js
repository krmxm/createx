import React, { Component } from 'react';
import { ReactComponent as Play } from '../../assets/img/sprite/play.svg';
import { ReactComponent as Mute } from '../../assets/img/sprite/mute.svg';
import Video from '../../assets/video/about-video.mp4';
import './video-block.scss';

class VideoBlock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isPlaying: false, // Track if the video is playing
            isMuted: true, // Track if the video is muted
        };
        this.videoRef = React.createRef(); // Ref for the video element
    }

    // Toggle play/pause
    handlePlayClick = () => {
        const video = this.videoRef.current;
        if (video.paused) {
            video.play();
            this.setState({ isPlaying: true });
        } else {
            video.pause();
            this.setState({ isPlaying: false });
        }
    };

    // Toggle mute/unmute
    handleMuteClick = () => {
        const video = this.videoRef.current;
        video.muted = !video.muted;
        this.setState({ isMuted: video.muted });
    };

    render() {
        const { isPlaying, isMuted } = this.state;

        return (
            <div className={`video-block ${isPlaying ? 'video-block_played' : ''}`}>
                <button
                    className={`btn-reset video-block__play ${isPlaying ? 'video-block__play_played' : ''}`}
                    onClick={this.handlePlayClick}
                    aria-label={isPlaying ? 'Pause video' : 'Play video'}
                >
                    <Play />
                </button>
                <button
                    className='btn-reset video-block__muted'
                    onClick={this.handleMuteClick}
                    aria-label={isMuted ? 'Unmute video' : 'Mute video'}
                >
                    <Mute />
                </button>
                <video
                    className='video-block__content'
                    ref={this.videoRef}
                    src={Video}
                    muted={isMuted}
                    loop
                    preload="metadata"
                    controls={isPlaying} // Show controls only when playing
                ></video>
            </div>
        );
    }
}

export default VideoBlock;