import React from 'react'
import ReactDataGrid from 'react-data-grid'


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
                    <table>
                        <tbody>
                            <tr>
                                <td>1</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default Square