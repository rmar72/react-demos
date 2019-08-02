import React, { Component } from 'react';
import "./App.css";

import SearchBar from './SearchBar';

export default class App extends Component {
    state = {
       term: ""
    }

    componentDidMount(){
        this.setState({ term: "Ruben" })
    }

    render(){
        return (
            <div class="app-container">
                { this.state.term }
                <SearchBar />
            </div>
        )
    }
}