import React from "react";
import Task from "./Task";

export default function TasksList(props) {
    return (
        <div>
            {props.tasks.map(task => <Task
                key={task.id}
                task={task}
                onDelete={props.onDelete}
                onChecked={props.onChecked}/>)}
            {!props.tasks.length && !props.loader && <div className="empty-tasks">There is no tasks</div>}
        </div>
    )
}
