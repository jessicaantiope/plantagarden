import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'

import Garden from './components/Garden'
import Home from './components/Home'
import PlantList from './components/PlantList'

const App = () => {
    return (
        <Router>
            <div id="app">
                <div className="title">
                    <h1>Plan<img className="main-logo" src="images/t-logo-white-2.png"></img> a Garden</h1>
                </div>
                <Route exact path="/" component={Home} />
                <Route path="/garden" component={Garden} />
                <br/>
                <footer className="footer">
                <a href="/" className="button is-link is-rounded" id="HomePage">Home</a>
                </footer>
            </div>
        </Router>
    )
}

export default App