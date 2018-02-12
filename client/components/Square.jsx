import React from 'react'
import ReactDataGrid from 'react-data-grid'


class Square extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
           garden: [
               [0,0,0,0,0,0,0,0],
               [0,0,0,0,0,0,0,0],
               [0,0,0,0,0,0,0,0]
           ]
        }
    }

    render () {
        return (
            <div className="columns">
                <div className="column is-two-thirds">
                    <table className="table is-bordered">
                        <tbody>
                            {this.state.garden && this.state.garden.map((row) => {
                                return (
                                    <tr>
                                        {row.map((cell) => {
                                            return <td onClick={() => console.log('chicken')}>0
                                            </td>
                                        })}
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table> 
                </div>
            </div>
        )
    }
}

export default Square
