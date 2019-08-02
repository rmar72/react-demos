import React, { Component } from 'react';
import "./App.css";
import youtube from '../apis/youtube.js';
import SearchBar from './SearchBar';
import VideoList from './VideoList'


export default class App extends Component {
    state = {
       videos: [],
       selectedVideo: {} 
    }

    componentDidMount(){
        this.setState({ term: "123" })
    }

    onTermSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });

        this.setState({ videos: response.data.items })
    }

    onVideoSelect = (video) => {
        console.log("video: ", video)
    }

    render(){
        return (
            <div className="app-container ui container">
                <SearchBar 
                    onTermSubmit={this.onTermSubmit}
                />
                I have { this.state.videos.length}
                <VideoList 
                    videos={this.state.videos} 
                    onVideoSelect={this.onVideoSelect} 
                />
            </div>
        )
    }
}