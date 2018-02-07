import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'

import Square from './components/Square'

const App = () => {
    return (
        <Router>
            <div id="app">
                <div className="title">
                    <h1>Plant a Garden</h1>
                </div>
                <div className="columns">
                    <div className="column" id="aboutApp">
                        <h3 class="subtitle">About</h3>
                            <p>Welcome to Plant a Garden.  This is a space for you to plan and create your own vegetable garden.</p>
                    </div>
                    <div className="column">
                        <a href="/#/square" className="button is-link is-rounded" id="createApp">Create your own garden</a>
                        <Route path="/square" component={Square} />
                    </div>
                    <div className="column" id="gardenPictures">
                        <figure className="image is-250x250">
                            <img src="images/collection.jpg"></img>
                        </figure>
                    </div>
                </div>
            </div>
        </Router>
    )
}

export default App