import React from "react";
import './clock.css'
import Time from "./Time";

export default class Clock extends React.Component {

    state = {
        hh: new Date().getHours() * 30,
        mm: new Date().getMinutes() * 6,
        ss: new Date().getSeconds() * 6
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(), 1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            hh: new Date().getHours() * 30,
            mm: new Date().getMinutes() * 6,
            ss: new Date().getSeconds() * 6
        });
    }

    render() {
        return (
           <Time time={this.state}/>
        )
    }
}
