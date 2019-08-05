import React from 'react';

const VideoPlayer = ({video}) => {
    if(JSON.stringify(video) === '{}'){
        return <div>Loading...</div>;
    }
    
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

    return(
        <div className="video-player">
            <div className="ui embed">
            <iframe src={videoSrc} title="youtube video" />
            </div>
            <div className="ui segment">
                <h4 className="ui header">{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>
        </div>)
    
}

export default VideoPlayer;