import React from "react";

export default function AddTask(props) {
    return (
        <div className="loader">
            {props.loader && <img src="/images/loader.gif" alt="" width="100"/>}
        </div>
    )
}
