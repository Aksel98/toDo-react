import React from "react";
import ToDoLists from "./dashboard/To-do-lists";
import Login from "./auth/Login";

export default class Main extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="lists">
                    <ToDoLists/>
                </div>
                <Login/>
            </div>
        )
    }
}
