import React, { Component } from 'react';
import Logo from './components/Logo';
import './App.css';
import Basket from './components/Basket';
import Baskettable from './components/Baskettable';
import Buybutton from './components/Buybutton';
import './App.css'

class App extends Component {
    render() {
        return ( <div className = "App" >
                <div>
                    <Logo/>
                    <Basket/>
                    <Baskettable/>
                    <Buybutton/>
                </div>
            </div>
        );
    }
}

export default App;
