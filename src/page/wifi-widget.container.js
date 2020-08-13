import React, { Component } from 'react'
import './wifi-widget.container.css'
import KeyWords from './keywords'
import TestRun from './test-run'
import FrecuencyTable from './frecuency-table'
import DataModel from './data/data_model'

//const preferencesList0 = WifiRecommendation.wifi_recommendations[0].locations[0].cpe_devices[0].recommendations[0].preferences;
//const preferencesList1 = DataModel.data_model_v2.wifi_recommendations[0].    locations[0].cpe_devices[0].recommendations[1].preferences;

class WifiWidgetContainer extends Component {
  constructor (props){
    super(props)

    this.state= {
      selectedSessionId: "",
      wifiRecommendation: DataModel.data_model_v2.wifi_recommendations[0],
      CPERecommendations: DataModel.data_model_v2.cpe_recommendations.sessions[0]
    }

    this.refreshSession = this.refreshSession.bind(this);
    this.updateRecommendation = this.updateRecommendation.bind(this);

  }

  refreshSession(event) {
    console.log("from parent : " + event.target.value)
    this.setState({
      selectedSessionId: event.target.value      
    },this.updateRecommendation)

    console.log("from parent done");
  }

  updateRecommendation(){

    console.log("updateRecomendation: " + this.state.selectedSessionId);

    let indiceResult = DataModel.data_model_v2.wifi_recommendations.filter(recommendationItem => {
      
      return this.state.selectedSessionId == recommendationItem.sessionId

    })

    let CpeRecommendResult = DataModel.data_model_v2.cpe_recommendations.sessions.filter(sessionItem => {

      return this.state.selectedSessionId == sessionItem.sessionId
    })

    this.setState({
      wifiRecommendation: indiceResult[0],
      CPERecommendations : CpeRecommendResult[0]
    })

  }

  render() {
    
    const currentChannel_HH_2_4 = DataModel.data_model_v2.cpe_recommendations.sessions[0].locations[0].cpe_devices[0].currentChannel2_4;
    const currentChannel_HH_5_0 = DataModel.data_model_v2.cpe_recommendations.sessions[0].locations[0].cpe_devices[0].currentChannel5;
    const manauallyChannels = DataModel.data_model_v2.manually_configurable_channels;
    const dfschannels = DataModel.data_model_v2.dfs_only_channels;


    return (
      <div>
         <div className="wifi-canvas-container">   
          <div className="wifi-grid-wrapper" >                
            <div className="wifi-grid-title-1">Wifi Diagnostics Test </div>
            <div className="wifi-grid-reload-2"> Reload </div>
            <div className="wifi-grid-test-3"> Test Return <TestRun updateSession={this.refreshSession}/> </div>
            <div className="wifi-grid-keywords-4"> <KeyWords/> </div>
            <div className="wifi-grid-band-24-5">
               Frecuency Band 2.4 GHz 
               <FrecuencyTable 
                 id={"2.4"}
                 preferencesList = {this.state.wifiRecommendation.locations[0].cpe_devices[0].recommendations[1].preferences}
                 activeChannel = {this.state.CPERecommendations.locations[0].cpe_devices[0].currentChannel2_4}
                 currentChannel = {currentChannel_HH_2_4}
               />
            </div>
            <div className="wifi-grid-band-50-6">
               Frecuency Band 5 GHz 
               <FrecuencyTable 
                  id={"5.0"}
                  preferencesList = {this.state.wifiRecommendation.locations[0].cpe_devices[0].recommendations[0].preferences} 
                  activeChannel = {this.state.CPERecommendations.locations[0].cpe_devices[0].currentChannel5}
                  currentChannel = {currentChannel_HH_5_0}
                  manauallySelectionChannels = {manauallyChannels}
                  dfsSelectionChannels = {dfschannels}
               />
            </div>
            <div className="wifi-grid-band-info-7"> Frecuency band informatiom </div>
            <div className="wifi-grid-buttom-8"> Bottoms Box </div>
          </div>    
         </div>
      </div>
    )
  }
}
export default WifiWidgetContainer