import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Basket from './components/Basket';
import Baskettable from './components/Baskettable';
import Buybutton from './components/Buybutton';
import './App.css'

class App extends Component {
    render() {
        return ( <div className = "App" >
                <div>
                    <Basket/>
                    <Baskettable/>
                    <Buybutton/>
                </div>
            </div>
        );
    }
}

export default App;