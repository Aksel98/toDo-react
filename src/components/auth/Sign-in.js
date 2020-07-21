import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function SignIn(props) {

    const {isError, email, password, onChange, signIn} = props

    return (
        <div>
            <div className={isError ? "text-box text-box-error" : 'text-box'}>
                <span className="icon"><FontAwesomeIcon icon="user"/></span>
                <input type="email"
                       name="email"
                       value={email}
                       onChange={onChange}
                       placeholder="Username..."
                       autoComplete="on"/>
            </div>
            <div className={isError ? "text-box text-box-error" : 'text-box'}>
                <span className="icon"><FontAwesomeIcon icon="lock"/></span>
                <input type="password"
                       name="password"
                       value={password}
                       onChange={onChange}
                       placeholder="Password..."
                       autoComplete="off"/>
            </div>
            <button disabled={!email || !password} onClick={signIn} className="btn">Sign in</button>
        </div>
    )
}
