import React, { Component} from 'react'
import FrecuencyCell from './frecuency-cell'
import './frecuency-table.css'


class FrecuencyTable extends Component {
    render() {
      const cellResult= [];
      Object.keys(this.props.preferencesList).forEach(function(key){
        cellResult.push(<div className="cell-1"><FrecuencyCell cellColorStyle={this.props.preferencesList[key]} label={key}/></div>);
      },this)
        return(
           <div>
                 <div className="wrapperfr2">
                    {cellResult}
                  </div>
           </div>
        )
    }
}
export default FrecuencyTable