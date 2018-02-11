import React from 'react'
import ReactDataGrid from 'react-data-grid'


class Square extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
           garden : [
               [0,0,0],
               [0,0,0],
               [0,0,0],
           ]
        }
    }
    render () {
        return (
            <div className="columns">
                <div className="column is-two-thirds">
                    <Square {...this.state.garden}/>
                </div>
            </div>
        )
    }
}

export default Square