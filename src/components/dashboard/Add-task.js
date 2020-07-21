import React from "react";
import ModalDialog from "../main/Modal-dialog";

export default function AddTask(props) {
    return (
        <section>
            <div className="add-task" onClick={props.openModalHandler}>
                <h2>Add new task</h2>
                <img src="/images/add-icon.png" alt="" width={50}/>
            </div>
            {props.openModal && <ModalDialog/>}
        </section>
    )
}
