import React from 'react'


class Vegetables extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            vegetables: [
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
            selectedVegetables: []
        }
    //     this.getVegetable = this.getVegetable.bind(this)
    // }
    // getVegetable() {
    //    let {selectedVegetable} = this.state
    //    if (selectedVegetables.find(selected => selected == vegetables.name)) 
    //    selectedVegetable = selectedVegetables.filter(selected => selected != vegetables.name)
    //    else selectedVegetables.push(vegetables.name)
    //    this.setState({selectedVegetables})
    }
    render () {
        return (
                <div onClick={this.getVegetable}>
                    <h1>List of vegetables</h1>
                    <h2>Name and description</h2>
                    {this.state.vegetables.map(vegetable => (
                        <p>{vegetable.name} - {vegetable.description} <img className="veggies" src={vegetable.image} ></img></p>
                        ))
                    }
                </div>
        )
    }
}

export default Vegetables