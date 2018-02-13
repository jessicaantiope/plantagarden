import React from 'react'
import ReactTooltip from 'react-tooltip'


class Plant extends React.Component {
    constructor(props) {
        super(props)
        const {name, description, image} = props.data
        this.state = {
            name: name,
            description: description,
            image: image,
        }
    }
    render () {
        return (
            <div onClick={(e) => {this.props.onClickCallback(this.props.data)}}>
                <a data-tip={this.state.name + '-' + this.state.description}>
                    <img className="veggies" src={this.state.image} ></img>
                    <ReactTooltip place="bottom" type="info" globalEventOff='click' /> 
                </a>
            </div>
        )
    }
}

export default Plant