import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'

import Square from './components/Square'
import Home from './components/Home'
import Vegetables from './components/Vegetables'

const App = () => {
    return (
        <Router>
            <div id="app">
                <div className="title">
                    <h1>Plan<img className="main-logo" src="images/t-logo-white-2.png"></img> a Garden</h1>
                </div>
                <Route exact path="/" component={Home} />
                <Route path="/square" component={Square} />
                <Route path="/square" component={Vegetables} />
            </div>
        </Router>
    )
}

export default App