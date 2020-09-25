import React, { Component} from 'react'
import FrecuencyCell from './frecuency-cell'
import './frecuency-table.css'


class FrecuencyTable extends Component {

    render() {
      
      const cellResult= [];

      //this.props.activeChannel
      //this.props.currentChannel

      Object.keys(this.props.preferencesList).forEach(key => {

        cellResult.push(
          <div className="cell-1">
             <FrecuencyCell cellColorStyle = {this.props.preferencesList[key]} 
                              label = {key}
                              activeChannel = {this.props.activeChannel}
                              currentChannel = {this.props.currentChannel}
                              id= {this.props.id}
                              manauallySelectionChannels= {this.props.manauallySelectionChannels}
                              dfsSelectionChannels = {this.props.dfsSelectionChannels}
                             />
          </div>
        );
      
      })


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