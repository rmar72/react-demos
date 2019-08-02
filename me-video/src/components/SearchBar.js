import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {

    state = {
        term: ''
    }

    inputChange = (e) => {
        e.preventDefault();
        this.setState({ term: e.target.value })
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.onTermSubmit(this.state.term);
    }

    render(){
        
        return (
            <div className="search-bar ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Video Search</label>
                        <input 
                            className="" 
                            type="text"
                            value={this.state.term}
                            onChange={this.inputChange}
                        />
                        <p>Displaying {this.props.videosLength} results</p>
                    </div>
                </form>
            </div>
        )
    }

}

export default SearchBar;