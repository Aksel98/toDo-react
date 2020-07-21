import React from "react";


export default function Time(props) {

        return (
            <div className="clock">
                <div className="hour">
                    <div className="hr" style={{transform: `rotateZ(${props.time.hh + (props.time.mm / 12)}deg)`}}></div>
                </div>
                <div className="min">
                    <div className="mn" style={{transform: `rotateZ(${props.time.mm}deg)`}}></div>
                </div>
                <div className="sec">
                    <div className="sc" style={{transform: `rotateZ(${props.time.ss}deg)`}}></div>
                </div>
            </div>
        )
}
