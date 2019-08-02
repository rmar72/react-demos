import React from 'react';
import './VideoItem.css';

const VideoItem = ({video, onVideoSelect}) =>
        <div className="video-item item" onClick={() => onVideoSelect(video)}>
            <img
                className="ui image"
                src={video.snippet.thumbnails.medium.url} 
                alt={video.snippet.description}
            />
            <div className="header">
                {video.snippet.title}
            </div>
        </div>;

export default VideoItem;