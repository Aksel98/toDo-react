import React from "react";

export default function Task(props) {
    const {task} = props
    return (
        <div className="task" style={task.done ? {backgroundColor: '#d184845c'} : {}}>
            <h2 style={task.done ? {textDecoration: 'line-through'} : {}}>{props.task.name}</h2>
            <div style={{marginLeft: 10}}>
                <img src={task.done ? '/images/done-task.png' : '/images/unchecked.png'} onClick={() => props.onChecked(task)} alt=""/>
                <img src="/images/delete-icon.png" onClick={() => props.onDelete(task.id)} alt=""/>
            </div>
        </div>
    )
}
