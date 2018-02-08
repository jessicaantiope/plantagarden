import React from 'react'


class Vegetables extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            vegetables: [
                {name: 'Lettuce', description: 'Leafy'},
                {name: 'Beetroot', description: 'Red and earthy'},
                {name: 'Capsicum', description: 'Refreshing crunch'},
                {name: 'Carrot', description: 'Crunchy'},
                {name: 'Corn', description: 'Yellow and juicy'},
                {name: 'Zuchinni', description: 'Versitle and green'},
                {name: 'Tomato', description: 'Red and round'},
                {name: 'Brocolli', description: 'Mini trees'},
                {name: 'Cabbage', description: 'Yum'},
                {name: 'Chilli', description: 'Hot'}
            ]
        }
    }
    render () {
        return (
            <div className="columns">
                <div className="column is-one-third level-right" id="vegetableList">
                    <h1>List of vegetables</h1>
                    <h2>Name and description</h2>
                    {this.state.vegetables.map(vegetable => (
                        <p>{vegetable.name} - {vegetable.description}</p>
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default Vegetables