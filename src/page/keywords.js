import React, {Component} from 'react'
import './keywords.css'
import badIconSvg from './icons/key-bad-icon.svg'
import goodIconSvg from './icons/key-good-icon.svg'
import mediumIconSvg from './icons/key-medium-icon.svg'
import active_chanelIconSvg from './icons/key-active_channel-icon.svg'
import flechaIconSvg from './icons/key-flecha-icon.svg'

class KeyWords extends Component {
    render() {
       
        return(
        <div>
            <div className="wrapper">               
                <div className= "kw-good-content"> 
                  <div className="kw-good-icon"><img src={goodIconSvg}/></div> 
                  <div className="kw-good-tag">Good</div> 
                </div>                          
                <div className="kw-medium-content">
                  <div className="kw-medium-icon"><img src={mediumIconSvg}/></div> 
                  <div className="kw-medium-tag">Medium</div>
                </div>               
                <div className="kw-bad-content"> 
                  <div className="kw-bad-icon"><img src={badIconSvg}/></div> 
                  <div className="kw-bad-tag">Bad</div> 
                </div>  
            </div>
            <div className="wrapper">            
                <div className="kw-current_chanel-content">
                    <div className="kw-flecha-icon"><img src={flechaIconSvg}/></div> 
                    <div className="kw-flecha-tag">Current chanel</div>
                </div>


                <div className="kw-active_channel-content">
                  <div className="kw-active_channel-icon"><img src={active_chanelIconSvg}/></div> 
                  <div className="kw-active_channel-tag">Active channel at time of test</div>
                </div>
            </div>
        </div>
        )
    }
}
export default KeyWords