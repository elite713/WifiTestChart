import React, { Component} from 'react'
import WifiRecomendation from './data/wifi-recommendation'
import FrecuencyCell from './frecuency-cell'
import './frecuency-table.css'

const preferencesList = WifiRecomendation.wifi_recommendations[0].locations[0].cpe_devices[0].recommendations[1].preferences;

class FrecuencyTable extends Component {
    render() {
        const cellResult= [];
          for (var i=1; i<=13; i++){
              var value = preferencesList[""+i];
          cellResult.push(<div className="cell-1"><FrecuencyCell cellColorStyle={value} label={""+i}/></div>);  
          }

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