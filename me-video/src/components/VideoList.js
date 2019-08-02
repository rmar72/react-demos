import React from 'react';
import VideoItem from './VideoItem.js';
import './VideoList.css';

const VideoList = ({videos}) => {
    const videolist = videos.map(v => <VideoItem key={v.id.videoId} video={v} />);
    return <div className="ui relaxed divided list"> {videolist} </div>;
}

export default VideoList;