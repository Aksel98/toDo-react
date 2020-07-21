import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";

export default class SignUp extends React.Component {

    render() {
        const {email, password, onChange, signUp} = this.props
        return (
            <div className="wrap">
                <Link to="/auth">
                    <span className="back-icon"><FontAwesomeIcon icon="arrow-left"/></span>
                </Link>
                <h2>Sign up here</h2>
                <form>
                    <input type="email"
                           name="email"
                           value={email}
                           onChange={onChange}
                           placeholder="Username..."/>
                    <input type="password"
                           name="password"
                           value={password}
                           onChange={onChange}
                           placeholder="Password..."
                           autoComplete="on"/>
                    <button onClick={signUp}>Register</button>
                </form>
            </div>
        )
    }
}
