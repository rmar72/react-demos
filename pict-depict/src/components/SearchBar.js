import React, { Component } from 'react';

class SearchBar extends Component{

    state = {
        searchTerm: ''
    }

    onFormSubmit = (e) => {
        e.preventDefault();

        this.props.onSubmit(this.state.searchTerm)
    }

    render(){
        return(
            <div className="ui segment">
                <form 
                    className="ui form"
                    onSubmit={this.onFormSubmit}
                >
                    <label>Image Search</label>
                    <input 
                        type="text" 
                        className="field"
                        value={ this.state.searchTerm }
                        placeholder="Search for images about..."
                        onChange={(e) => 
                            this.setState({ searchTerm: e.target.value })}
                    />
                </form>
            </div>
        )
    }
}

export default SearchBar;