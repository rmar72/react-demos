import React, { Component } from 'react';
import unsplash from '../api/unsplash-config';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends Component {

    state = {
        images: []
    };

    // syntatic sugar for binding cb, use throughout app safely relying on 'this'
    onSearchSubmit = async (term) => {
        const response = await unsplash.get('/search/photos', {
            params: { query: term }
        });

        this.setState({ images: response.data.results });
    }

    render(){
        // this.onSearchSubmit("cheetas"); // interesting find
        // so from inspecting the this, I was saying that the this within the method
        // is indeed pointing to this App class, bc its a class(object) method;
        // in reality its a key holding a anon fn,
        // and bc we actually pass it down as a prop to our child component
        // whenever it gets invoked, it'll point to whats to the left of it
        // so on the other side you'll see this.props.onSubmit()
        // whats to the left of the invoked fn? Yup props! 
        // Gotta use one of the 3 strategies: 
        // constructor with bind, object method inline arrow fn, or wrap in arrow fn in an event cb 
   
        return(
            <div className="ui container" style={{ marginTop: '15px' }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                Found: { this.state.images.length } IMages
                <ImageList imgs={ this.state.images } />
            </div>
        )
    }

}

export default App;