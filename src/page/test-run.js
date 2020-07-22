import React, { Component } from 'react'
import './test-run.css'
import dataModel from './data/data_model'

class TestRun extends Component {
    render() {
        var optionsResult=[];
        
        dataModel.data_model_v2.cpe_recommendations.sessions.map(item=>{

            var convert_optionsResult;
            var currentDate;
            if (item.timestamp != 0)
            convert_optionsResult = new Date(item.timestamp).toISOString();
            else 
            convert_optionsResult = "current session";
            optionsResult.push(<option value={item.sessionId}>{convert_optionsResult}</option>);

        })

        return(
            <div className="test-return">
               <select className="test-session-list" id="session">
                    {optionsResult}
               </select>

            </div>
        )
    }
}
export default TestRun