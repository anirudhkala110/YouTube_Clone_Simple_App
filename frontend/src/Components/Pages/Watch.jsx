import React, { useState, useRef, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Navbar2 from '../../Utils/Navbar2';

const videos = [
    '1.mp4',
    '2.mp4',
    '3.mp4',
    '4.mp4',
    '5.mp4',
    '6.mp4',
    '7.mp4'
];

const Watch = () => {
    const { id, videoName } = useParams();
    const currentIndex = videos.indexOf(videoName);
    const vdo = `/Video/${videoName}`;
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(true);
    const [isMuted, setIsMuted] = useState(false);
    const [playbackRate, setPlaybackRate] = useState(1);
    const [autoPlayNext, setAutoPlayNext] = useState(true);
    const [showReplay, setShowReplay] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState(1);
    const [isFullScreen, setIsFullScreen] = useState(false);

    const togglePlayPause = () => {
        setIsPlaying(!isPlaying);
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
                setShowReplay(false);
            } else {
                videoRef.current.play();
                setShowReplay(false);
            }
        }
    };

    const handleToggleMute = () => {
        setIsMuted(!isMuted);
        if (videoRef.current) {
            videoRef.current.muted = !isMuted;
        }
    };

    const handlePlaybackRateChange = (newRate) => {
        setPlaybackRate(newRate);
        if (videoRef.current) {
            videoRef.current.playbackRate = newRate;
        }
    };

    const handleVideoEnded = () => {
        // alert("video ended")
        if (autoPlayNext) {
            goToNextVideo();
        } else {
            setIsPlaying(false);
            setShowReplay(true);
        }
    };

    const goToPreviousVideo = () => {
        const previousIndex = currentIndex - 1;
        if (previousIndex >= 0) {
            window.location.href = `/watch-video/${id}/${videos[previousIndex]}`;
        }
    };

    const goToNextVideo = () => {
        const nextIndex = currentIndex + 1;
        if (nextIndex < videos.length) {
            window.location.href = `/watch-video/${id}/${videos[nextIndex]}`;
        }
        else {
            setAutoPlayNext(false)
            setIsPlaying(false);
            setShowReplay(true);
        }
    };

    const handleTimeChange = (e) => {
        const newTime = parseFloat(e.target.value);
        setCurrentTime(newTime);
        if (videoRef.current) {
            videoRef.current.currentTime = newTime;
        }
    };

    useEffect(() => {
        if (autoPlayNext) {
            setIsPlaying(true);
            setShowReplay(false);
        }
    }, [autoPlayNext]);

    useEffect(() => {
        if (videoRef.current) {
            setCurrentTime(videoRef.current.currentTime);
            setDuration(videoRef.current.duration);
        }
    }, [videoRef.current?.currentTime, videoRef.current?.duration]);

    const handleVolumeChange = (newVolume) => {
        setVolume(newVolume);
        if (videoRef.current) {
            videoRef.current.volume = newVolume;
        }
    };

    const toggleFullScreen = () => {
        if (!isFullScreen) {
            if (videoRef.current) {
                if (videoRef.current.requestFullscreen) {
                    videoRef.current.requestFullscreen();
                } else if (videoRef.current.mozRequestFullScreen) {
                    videoRef.current.mozRequestFullScreen();
                } else if (videoRef.current.webkitRequestFullscreen) {
                    videoRef.current.webkitRequestFullscreen();
                } else if (videoRef.current.msRequestFullscreen) {
                    videoRef.current.msRequestFullscreen();
                }
                videoRef.current.classList.add('hide-controls'); // Add the class
            }
        }
        // } else {
        //     if (document.exitFullscreen) {
        //         document.exitFullscreen();
        //     } else if (document.mozCancelFullScreen) {
        //         document.mozCancelFullScreen();
        //     } else if (document.webkitExitFullscreen) {
        //         document.webkitExitFullscreen();
        //     } else if (document.msExitFullscreen) {
        //         document.msExitFullscreen();
        //     }
        //     videoRef.current.classList.remove('hide-controls'); // Remove the class
        // }
        setIsFullScreen(!isFullScreen);
    };



    const repeater = ['1.mp4', '2.mp4', '3.mp4', '4.mp4', '5.mp4', '6.mp4', '7.mp4', '8.mp4', '9.mp4', '10.mp4', '11.mp4', '12.mp4', '13.mp4', '14.mp4', '15.mp4', '16.mp4', 'test.mp4']

    return (
        <div className='w-100 watch-video-page'>
            <Navbar2 />
            <div className='w-100 player-and-other-data-base'>
                <div className='container1'>
                    <div className='playerWidth'>
                        <div className='d-flex justify-content-center mt-2'>
                            <div className='shadow mb-3' style={{ maxHeight: "800px" }}>
                                <video
                                    ref={videoRef}
                                    src={vdo}
                                    autoPlay={isPlaying}
                                    muted={isMuted}
                                    playbackRate={playbackRate}
                                    onClick={togglePlayPause}
                                    onEnded={handleVideoEnded}
                                    onTimeUpdate={() => setCurrentTime(videoRef.current.currentTime)}
                                    id='vdo-player'
                                    volume={volume}
                                    className={isFullScreen ? 'hide-controls' : ''}
                                />
                                <div className='d-flex justify-content-between'>
                                    <div className='d-flex align--items-center'>
                                        {currentIndex > 0 ? (
                                            <button className="btn px-2 fs-5" onClick={goToPreviousVideo}>
                                                <i className='bi bi-skip-backward-fill'></i>
                                            </button>
                                        ) : <button className="btn px-2 fs-5">No Prev</button>}
                                        <button className="btn px-2 fs-5" onClick={togglePlayPause}>
                                            {showReplay ? <i className='bi bi-arrow-counterclockwise'></i> : (isPlaying ? <i className='bi bi-pause'></i> : <i className='bi bi-play'></i>)}
                                        </button>
                                        {currentIndex < videos.length - 1 ?
                                            <button className="btn px-2 fs-5" onClick={goToNextVideo}>
                                                <i className='bi bi-skip-forward-fill'></i>
                                            </button> : <button className="btn px-2 fs-5">No Next</button>
                                        }
                                        <div className='d-flex align-items-center'>
                                            <button className="btn px-2 fs-5" onClick={handleToggleMute}>
                                                {isMuted ? <i className='bi bi-volume-mute-fill'></i> : <i className='bi bi-volume-up-fill'></i>}
                                            </button>
                                            <input
                                                type='range'
                                                className='slider'
                                                value={volume}
                                                min={0}
                                                max={1}
                                                step={0.01}
                                                onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
                                                style={{ width: "70px" }}
                                            />
                                        </div>

                                    </div>
                                    <div className='d-flex justify-content-between align-items-center ' style={{ width: "30vw" }}>
                                        <span className='px-2'>{formatTime(currentTime)}</span>
                                        <input
                                            type='range'
                                            className='slider'
                                            value={currentTime}
                                            min={0}
                                            max={duration}
                                            step={0.1}
                                            onChange={handleTimeChange}
                                            style={{ width: "100%" }}
                                        />
                                        <span className='px-2'>{formatTime(duration)}</span>
                                    </div>

                                    <div>
                                        <button className="btn px-2 fs-5" onClick={() => setAutoPlayNext(!autoPlayNext)}>
                                            {autoPlayNext ? <i class="bi bi-pause-circle-fill"></i> : <i class="bi bi-play-circle-fill"></i>}
                                        </button>
                                        <select
                                            className='btn'
                                            name="Playback Speed"
                                            value={playbackRate}
                                            onChange={(e) => handlePlaybackRateChange(parseFloat(e.target.value))}
                                        >
                                            <option value={0.25}>0.25x</option>
                                            <option value={0.5}>0.5x</option>
                                            <option value={0.75}>0.75x</option>
                                            <option value={1}>1x</option>
                                            <option value={1.25}>1.25x</option>
                                            <option value={1.5}>1.5x</option>
                                            <option value={1.75}>1.75x</option>
                                            <option value={2}>2x</option>
                                        </select>
                                        <i onClick={toggleFullScreen} style={{ marginTop: `${isFullScreen ? '-20px' : ""}` }} >
                                            {isFullScreen ? <button class="btn bi bi-fullscreen"></button> : <button class="btn bi bi-fullscreen"></button>}
                                        </i>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className='widthmore1000Comments'>
                        <div className='py-2 ms-5'>
                            <div>Comments</div>
                            <div className='d-flex flex-column p-2 mb-2 card'>
                                <div className='card-header'> <i className='bi bi-person-circle'></i> User Name</div>
                                <div className='card-body'>Here is the discription of the comment that had been posted by the user</div>
                                <div className='card-title'> <i className='bi bi-hand-thumbs-up-fill'></i> 5.3k</div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='container1-side-player '>
                    <div className='shadow' style={{ width: "100%" }}>
                        {
                            repeater.map((i) => (
                                <Link to={`/watch-video/${i}/${i}`} className='text-decoration-none text-dark'>
                                    <div className='d-flex p-1 mb-1'>
                                        <video src={`/Video/${i}`} style={{ width: "150px", height: "" }} /><div className='ms-1'>{i}</div>
                                    </div>
                                </Link>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className='w-100 player-and-other-data-base-container2-1'>
                <div className='container2'>
                    <div className='py-2' style={{ maxWidth: "800px" }}>
                        <div>Comments</div>
                        <div className='d-flex flex-column p-2 mb-2 card' style={{ maxWidth: "720px" }}>
                            <div className='card-header'> <i className='bi bi-person-circle'></i> User Name</div>
                            <div className='card-body'>Here is the discription of the comment that had been posted by the user</div>
                            <div className='card-title'> <i className='bi bi-hand-thumbs-up-fill'></i> 5.3k</div>
                        </div>

                    </div>
                    <div>
                        <div className=''>
                            {
                                repeater.map((i) => (
                                    <div className='d-flex p-1 mb-1'>
                                        <video src={`/Video/${i}`} style={{ width: "100px", height: "" }} /><div className='ms-1'>Video Description</div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds - minutes * 60);

    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
};

export default Watch;
