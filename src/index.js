'use strict';
import React, { Component } from 'react'
import SearchBar from './components/search_bar';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyBNN903EZRtJMBiBg9QplZA5g_mBuROIYg'

//App is a class
class App extends Component {
    constructor(props) {
        super(props)
       
        YTSearch({ key: API_KEY, term: 'surfboards' }, function (data) {
            this.setState( { videos: data });
        })
    }
    render() {
        return (
            <div>
                <SearchBar />

            </div>
        );
    }

}
//ReactDOM should takes an instance a first argument <App /> is a jsx instance and target as second element "the place holder"
ReactDOM.render(<App />, document.querySelector('.container'));