import React from 'react'


class Square extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
           
        }
    }
    render () {
        return (
            <div className="columns">
                <div className="column is-two-thirds">
                    <p>Hello Square</p>
                </div>
            </div>
        )
    }
}

export default Square