import React from "react";
import ToDoLists from "./dashboard/To-do-lists";
import Login from "./auth/Login";
import {auth} from "../services/Database";
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'

export default class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: {}
        }
    }

    componentDidMount() {
        this.authListener()
    }

    authListener() {
        auth.onAuthStateChanged(user => user ? this.setState({user}) : this.setState({user: null}))
    }

    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/dashboard">
                        <div className="container">
                            <ToDoLists/>
                        </div>
                    </Route>
                </Switch>
                <Switch>
                    <Route path="/auth">
                        <div className="auth-container sign-in-container">
                            <div className="container-bg">
                                <Login/>
                            </div>
                        </div>
                    </Route>
                </Switch>
                <Redirect to={this.state.user ? '/dashboard' : '/auth'}/>
            </Router>
        )
    }
}
