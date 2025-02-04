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
        } else {
            video.pause();
        }
    };

    // Update state when video plays
    handleVideoPlay = () => {
        this.setState({ isPlaying: true });
    };

    // Update state when video pauses
    handleVideoPause = () => {
        this.setState({ isPlaying: false });
    };

    // Toggle mute/unmute
    // handleMuteClick = () => {
    //     const video = this.videoRef.current;
    //     video.muted = !video.muted;
    //     this.setState({ isMuted: video.muted });
    // };

    render() {
        const { isPlaying, isMuted } = this.state;

        return (
            <div 
                className={`video-block ${isPlaying ? 'video-block_played' : ''}`}
                onClick={this.handleVideoClick} // Обработка клика на всю область video-block
                role="button" 
                aria-label={isPlaying ? 'Пауза видео' : 'Воспроизведение видео'}>
                    
                <button
                    className={`btn-reset video-block__play ${isPlaying ? 'video-block__play_played' : ''}`}
                    onClick={this.handlePlayClick}
                    aria-label={isPlaying ? 'Pause video' : 'Play video'}
                >
                    <Play />
                </button>
                <video
                    className='video-block__content'
                    ref={this.videoRef}
                    src={Video}
                    muted={isMuted}
                    loop
                    preload="metadata"
                    controls={isPlaying}
                    onPlay={this.handleVideoPlay}
                    onPause={this.handleVideoPause} // Show controls only when playing
                ></video>
            </div>
        );
    }
}

export default VideoBlock;