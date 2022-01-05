import React from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import Router from "./common/Routes"
import Header from "./components/Header";

function App() {


    return (
        <div className="App">

            <BrowserRouter>
                <Header/>
                <Router/>
            </BrowserRouter>

        </div>
    );
}

export default App;
