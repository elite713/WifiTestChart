import React, { Component } from 'react'
import './frecuency-cell.css'

class FrecuencyCell extends Component {
    render() {
        return(            
            <div className="frecuencyCell">
                <div className={"frecuencyColor " + this.props.cellColorStyle} > </div>
                <div className="frecuencyLabel">{this.props.label}</div>
            </div>
           
        )
    }
}
export default FrecuencyCell