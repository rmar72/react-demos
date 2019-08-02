import React, { Component } from 'react';
import "./App.css";
import youtube from '../apis/youtube.js';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';


export default class App extends Component {
    state = {
       videos: [],
       selectedVideo: {} 
    }

    componentDidMount(){
        this.onTermSubmit("Buildings 2019");
    }

    onTermSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });

        this.setState({
             videos: response.data.items,
             selectedVideo: response.data.items[0]
        });
    }

    onVideoSelect = (selectedVideo) =>
        this.setState({ selectedVideo: selectedVideo });

    render(){
        return (
            <div className="app-container ui container">
                <SearchBar
                    onTermSubmit={this.onTermSubmit}
                    videosLength={this.state.videos.length}
                />
                <VideoDetail video={this.state.selectedVideo} />

                <VideoList 
                    videos={this.state.videos} 
                    onVideoSelect={this.onVideoSelect} 
                />
                
            </div>
        )
    }
}