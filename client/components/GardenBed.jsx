import React from 'react'
import Square from './Square'


class GardenBed extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
           
        }
    }
    render () {
        return (
          <p>{Square}</p>
        )
    }
}

export default GardenBed