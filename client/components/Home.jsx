import React from 'react'


class Home extends React.Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {

    //     }
    // }
    render () {
        return (
            <div className="columns">
                <div className="column" id="aboutApp">
                    <h3 className="subtitle">About</h3>
                        <p>Welcome to Plant a Garden.  This is a space for you to plan and create your own vegetable garden.</p><br/>
                        <img src="images/appPreview.png"></img>
                </div>
                <div className="column">
                    <a href="/#/garden" className="button is-link is-rounded" id="createApp">Create your own garden</a>
                </div>
                <div className="column" id="gardenPictures">
                    <figure className="image is-250x250">
                        <img src="images/collection.jpg"></img>
                    </figure>
                </div>
            </div>
        )
    }
}

export default Home