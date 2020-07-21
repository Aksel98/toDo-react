import React from "react";


export default function Time({time}) {

        return (
            <div className="clock">
                <div className="hour">
                    <div className="hr" style={{transform: `rotateZ(${time.hh + (time.mm / 12)}deg)`}}/>
                </div>
                <div className="min">
                    <div className="mn" style={{transform: `rotateZ(${time.mm}deg)`}}/>
                </div>
                <div className="sec">
                    <div className="sc" style={{transform: `rotateZ(${time.ss}deg)`}}/>
                </div>
            </div>
        )
}
