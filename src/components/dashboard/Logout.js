import React from "react";
import {auth} from "../../services/Database";

export default function Logout() {

    function logout() {
        auth.signOut().catch(err => new Error(err.message))
    }

    return (
        <div className="logout">
            <button onClick={logout}>Logout</button>
        </div>
    )
}
