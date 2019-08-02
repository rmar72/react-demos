import React, { Component } from 'react';
import "./App.css";
import youtube from '../apis/youtube.js';
import SearchBar from './SearchBar';
import VideoList from './VideoList'



export default class App extends Component {
    state = {
       videos: []
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

    render(){
        return (
            <div className="app-container ui container">
                <SearchBar 
                    onTermSubmit={this.onTermSubmit}
                />
                I have { this.state.videos.length}
                <VideoList videos={this.state.videos} />
            </div>
        )
    }
}