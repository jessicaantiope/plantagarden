import React from 'react'
import ReactDom from 'react-dom'
import Plant from './Plant'


class PlantList extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            plants: [
                {name: 'Lettuce', description: 'Leafy', image: 'images/lettuce.png'},
                {name: 'Beetroot', description: 'Red and earthy', image: 'images/beetroot.png'},
                {name: 'Capsicum', description: 'Refreshing crunch', image: 'images/capsicum.png'},
                {name: 'Carrot', description: 'Crunchy', image: 'images/carrot.png'},
                {name: 'Corn', description: 'Yellow and juicy', image: 'images/corn.png'},
                {name: 'Zuchinni', description: 'Versitle and green', image: 'images/zuchinni.png'},
                {name: 'Tomato', description: 'Red and round', image: 'images/tomato.png'},
                {name: 'Brocolli', description: 'Mini trees', image: 'images/broccoli.png'},
                {name: 'Eggplant', description: 'Purple goodness', image: 'images/eggplant.png'},
                {name: 'Chilli', description: 'Hot', image: 'images/chilli.png'}
            ],
        }
        console.log(props.callback)
    }
    render () {
        return (
                <div className="container">
                    <h1>Select your plants:</h1><br/>
                    {this.state.plants.map(plant => (
                        <Plant key={plant.name} data={plant} onClickCallback={this.props.callback}/>
                        ))
                    }
                    
                </div>
        )
    }
}

export default PlantList