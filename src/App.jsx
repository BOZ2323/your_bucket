import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Basket from './components/Basket'
import Baskettable from './components/Baskettable'

class App extends Component {
    render() {
        return ( <div className = "App" >
            <Basket/>
            <Baskettable/>

            </div>
        );
    }
}

export default App;