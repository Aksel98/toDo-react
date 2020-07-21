import React from "react";
import ModalDialog from "../main/Modal-dialog";

export default function AddTask(props) {
    return (
        <section>
            <div className="add-task" onClick={props.openModalHandler}>
                <img src="/images/add-icon.png" alt="" width={50}/>
                <h2 style={{marginLeft: 20}}>Add new task</h2>
            </div>
            {props.openModal && <ModalDialog/>}
        </section>
    )
}
