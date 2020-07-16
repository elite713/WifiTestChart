import React, { Component } from 'react'
import './test-run.css'

class TestRun extends Component {
    render() {
        return(
            <div className="test-return">
               <select className="test-session-list" id="session">
                   <option value="option1">01/01/2018 12:01:35</option>
                   <option value="option2">01/02/2018 12:01:35</option>
                   <option value="option3">01/03/2018 12:01:35</option>
                   <option value="option4">01/04/2018 12:01:35</option>
                   <option value="option5">01/05/2018 12:01:35</option>
                   <option value="option6">01/06/2018 12:01:35</option>
                   <option value="option7">01/07/2018 12:01:35</option>               
               </select>

            </div>
        )
    }
}
export default TestRun