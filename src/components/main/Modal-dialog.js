import React from "react";

export default function ModalDialog(props) {
    return (
        <div>
            <div className="modal">
                <div className="modal-content">
                    <div className="sub-modal">
                        <div>
                            <input
                                   value={props.value}
                                   onChange={props.changeInput}
                                   placeholder="Add task..."/>
                            {props.isDuplicateName && <div className="error-text">Already exists</div>}
                        </div>
                        <div onClick={props.closeModal} className="close">&times;</div>
                    </div>
                    <div className="done" onClick={props.addTask}>
                        <button disabled={!props.value}>Add task</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
