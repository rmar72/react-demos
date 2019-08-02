import React from 'react';
import VideoItem from './VideoItem.js';
import './VideoList.css';

const VideoList = ({videos, onVideoSelect}) => {
    const videolist = videos.map(v => 
        <VideoItem key={v.id.videoId} video={v} onVideoSelect={onVideoSelect} />);
        
    return <div className="ui relaxed divided list"> {videolist} </div>;
}

export default VideoList;