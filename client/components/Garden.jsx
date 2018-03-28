import React from 'react'
import ReactDataGrid from 'react-data-grid'
import PlantList from './PlantList'
import {HashRouter as Router, Route, Link} from 'react-router-dom'
import Plant from './Plant'


class Garden extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
           garden: [
               [0,0,0,0,0,0,0,0,0,0],
               [0,0,0,0,0,0,0,0,0,0],
               [0,0,0,0,0,0,0,0,0,0],
               [0,0,0,0,0,0,0,0,0,0]
           ],
           selectedPlant: null
        }

        this.setSelectedPlant = this.setSelectedPlant.bind(this)
        this.getPlantName = this.getPlantName.bind(this)
        this.setGardenCell =this.setGardenCell.bind(this)
    }

setSelectedPlant(plant) {
    this.setState((prevState) => {
        return {
            garden: prevState.garden,
            selectedPlant: plant
        }
    })
    
}

setGardenCell(x, y, plant) {
    console.log(`OMG ${x} ${y} ${plant}`)
    this.setState((prevState) => {
        let updatedRow = prevState.garden[x]
        updatedRow[y] = plant

        let updatedGarden = prevState.garden
        updatedGarden[x] = updatedRow
        return {
            garden: updatedGarden,
            selectedPlant: prevState.selectedPlant
        }
    })
}

getPlantName(x, y, plant) {
    if (plant) {
        return <Plant key={plant.name} data={plant} onClickCallback={(plant) => {console.log("Do nothing")}}/> 
    }
}


    render () {
        return (
            <div className="container">
                <div className="column">
                    <table className="table is-bordered">
                        <tbody>
                            {this.state.garden && this.state.garden.map((row, i) => {
                                return (
                                    <tr key={`row-${i}`}>
                                        {row.map((cell, j) => {
                                            return (
                                            <td key={`row-${i}-cell-${j}`} onClick={(e) => {this.setGardenCell(i, j, this.state.selectedPlant)}}>
                                            {this.getPlantName(i, j, cell)}
                                            </td>
                                        )})}
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table> 
                </div>
                <div>
                    <PlantList callback={this.setSelectedPlant}/>
                </div>
            </div>
        )
    }
}

export default Garden
