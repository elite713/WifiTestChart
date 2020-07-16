import React, { Component } from 'react'
import './wifi-widget.container.css'
import KeyWords from './keywords'
import TestRun from './test-run'
import FrecuencyTable from './frecuency-table'

class WifiWidgetContainer extends Component {
  render() {
    
    return (
      <div>
         <div className="wifi-canvas-container">   
          <div className="wifi-grid-wrapper" >                
            <div className="wifi-grid-title-1">Wifi Diagnostics Test </div>
            <div className="wifi-grid-reload-2"> Reload </div>
            <div className="wifi-grid-test-3"> Test Return <TestRun/> </div>
            <div className="wifi-grid-keywords-4"> <KeyWords/> </div>
            <div className="wifi-grid-band-24-5"> Frecuency Band 2.4 GHz <FrecuencyTable/></div>
            <div className="wifi-grid-band-50-6"> Frecuency Band 5 GHz </div>
            <div className="wifi-grid-band-info-7"> Frecuency band informatiom </div>
            <div className="wifi-grid-buttom-8"> Bottoms Box </div>
          </div>    
         </div>
      </div>
    )
  }
}
export default WifiWidgetContainer