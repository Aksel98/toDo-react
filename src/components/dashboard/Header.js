import React from "react";
import Clock from "../main/Clock/Clock";

export default class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <Clock/>
                <img className="logo" src="/images/logo.png" alt="" width="100"/>
                <h1 className="header-title">To do List App</h1>
            </div>
        )
    }
}
