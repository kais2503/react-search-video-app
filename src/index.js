'use strict';
import React, { Component } from 'react'
import SearchBar from './components/search_bar';
import VideoList from './components/video_list'
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyBNN903EZRtJMBiBg9QplZA5g_mBuROIYg'

//App is a class
class App extends Component {
    constructor(props) {
        super(props);
        this.state={videos:[]};
        YTSearch({ key: API_KEY, term: 'surfboards' }, (videos) => {
            this.setState({ videos });
        })
    }
    render() {
        return (
            <div>
                <SearchBar />
                <VideoList videos ={this.state.videos}/>

            </div>
        );
    }

}
//ReactDOM should takes an instance a first argument <App /> is a jsx instance and target as second element "the place holder"
ReactDOM.render(<App />, document.querySelector('.container'));