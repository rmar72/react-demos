import React, { Component } from 'react';
import "./App.css";
import youtube from '../apis/youtube.js';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoPlayer from './VideoPlayer';


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
            <main>
                <div className="background-top-theme"></div>
                <div className="app-container ui container">
                    <SearchBar
                        onTermSubmit={this.onTermSubmit}
                        videosLength={this.state.videos.length}
                    />

                    <div className="videos-container">
                        <VideoPlayer video={this.state.selectedVideo} />

                        <VideoList
                            videos={this.state.videos} 
                            onVideoSelect={this.onVideoSelect}
                        />
                    </div>
                </div>
            </main>
            
        )
    }
}