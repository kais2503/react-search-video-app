'use strict';
import _ from 'lodash'
import React, { Component } from 'react'
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyBNN903EZRtJMBiBg9QplZA5g_mBuROIYg'

//App is a class
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            slectedVideo: null

        };
        this.videoSearch('javascript')
    }
    videoSearch(searchTerm) {
        YTSearch({ key: API_KEY, term: searchTerm }, (videos) => {
            this.setState({
                videos: videos,
                slectedVideo: videos[0]
            });
        })

    }
    render() {
        const videoSearch=_.debounce((term)=>{this.videoSearch(term)},300);
        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch} />
                <VideoDetail video={this.state.slectedVideo} />
                <VideoList
                    onVideoSelect={slectedVideo => this.setState({ slectedVideo })}
                    videos={this.state.videos}
                />

            </div>
        );
    }

}
//ReactDOM should takes an instance a first argument <App /> is a jsx instance and target as second element "the place holder"
ReactDOM.render(<App />, document.querySelector('.container'));