'use strict';
import SearchBar from './components/search_bar';
import ReactDOM from 'react-dom';
import React from 'react';

const API_KEY= 'AIzaSyBNN903EZRtJMBiBg9QplZA5g_mBuROIYg'
//App is a class
const App = () => {
    return ( 
    <div> 
        <SearchBar />

    </div>
    );
}
//ReactDOM should takes an instance a first argument <App /> is a jsx instance and target as second element "the place holder"
ReactDOM.render(<App />, document.querySelector('.container'));