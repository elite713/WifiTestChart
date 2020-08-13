import React, { Component } from 'react'
import './frecuency-cell.css'
import flechaIconSvg from './icons/key-flecha-icon.svg'
import star from './icons/ic_star.svg'

class FrecuencyCell extends Component {
    render() {
        let activeChannelBox = {};
        let flechaPosition = {
            position: "absolute",
            marginTop: -24
        };

        if (this.props.activeChannel == this.props.label) {
            activeChannelBox.border = "2px solid #0ab7ea";
        }
        let currentChannel;
        if (this.props.currentChannel == this.props.label) {
            currentChannel = <img src={flechaIconSvg} style={flechaPosition} />
        }
        let centeredFlecha;
        if (this.props.id === "2.4") {
            centeredFlecha = { width: "20%" }
        } else {
            centeredFlecha = { width: "50%" }
        }

        let decorationSelection;
        let decorationPlus;
        const x = -10;
        const y = -12;

        if (this.props.id === "5.0" && this.props.manauallySelectionChannels.indexOf(parseInt(this.props.label)) > -1) {

            decorationSelection = <img src={star} />
        }

        if (this.props.id === "5.0" && this.props.dfsSelectionChannels.indexOf(parseInt(this.props.label)) > -1) {
            decorationSelection = "[+]"
            decorationPlus = { color: "white", transform: `translate(${x}px,${y}px)` }
        }
        // transform: 'translate(-10px,-12px)'                                 

        /*revisar mañana 
        let centeredFlecha = {};
         if (this.props.id === "2.4"){
             centeredFlecha.width = "20%";
         }else{
             centeredFlecha.width = "50%";
         }*/

        return (
            <div className="frecuencyCell" style={activeChannelBox}>
                <div className="frecuencyCellStyle" style={centeredFlecha}>{currentChannel}</div>
                <div className={"frecuencyColor " + this.props.cellColorStyle}>
                    <div className="frecuencyImage" style={decorationPlus}>
                        {decorationSelection}
                    </div>
                </div>
                <div className="frecuencyLabel">{this.props.label}</div>
            </div>

        )
    }
}
export default FrecuencyCell