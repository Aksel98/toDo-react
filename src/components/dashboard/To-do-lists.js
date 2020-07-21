import React from "react";
import AddTask from "./Add-task";
import Loader from "../main/Loader";
import ModalDialog from "../main/Modal-dialog";
import TasksList from "./Tasks-list";
import {db} from "../../services/Database";
import Header from "./Header";

export default class ToDoLists extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            taskName: '',
            loader: true,
            openModal: false,
            isDuplicateName: false
        }
    }

    componentDidMount() {
        this.getTasks()
    }

    getTasks = () => {
        const tasks = []
        db.collection("to-do-items").get().then(snapshot => {
            snapshot.docs.forEach(doc => {
                tasks.push({id: doc.id, ...doc.data()})
            })
            this.setState({tasks, loader: false})
        }).catch(err => new Error(err.message));

    }

    openModalHandler = () => {
        this.setState({openModal: true})
    }

    closeModal = () => {
        this.setState({
            openModal: false,
            taskName: '',
            isDuplicateName: false
        })
    }

    addTaskHandler = () => {
        const tasks = [...this.state.tasks]
        const newTask = {
            name: this.state.taskName,
            done: false
        }
        const duplicateIndex = tasks.findIndex(task => task.name === this.state.taskName)
        if (duplicateIndex === -1) {
            db.collection('to-do-items').add(newTask).then(doc => {
                newTask.id = doc.id
                tasks.push(newTask)
                this.setState({
                    tasks,
                    openModal: false,
                    taskName: '',
                })
            }).catch(err => new Error(err.message));
        } else {
            this.setState({isDuplicateName: true})
        }
    }

    handleChange = (e) => {
        this.setState({
            taskName: e.target.value.trim() ? e.target.value : '',
            isDuplicateName: false
        })
    }

    deleteHandler = (id) => {
        const tasks = [...this.state.tasks]
        db.collection('to-do-items').doc(id).delete().then(() => {
            const currentIndex = tasks.findIndex(task => task.id === id)
            tasks.splice(currentIndex, 1)
            this.setState({tasks})
        }).catch(err => new Error(err.message));
    }

    checkedHandler = (task) => {
        const tasks = [...this.state.tasks]
        db.collection("to-do-items").doc(task.id).update({done: !task.done}).then(() => {
            const currentTask = {...task}
            const checkedTaskIndex = tasks.findIndex(el => el.id === currentTask.id)
            tasks.splice(checkedTaskIndex, 1, {...currentTask, done: !task.done})
            this.setState({tasks})
        }).catch(err => new Error(err.message));
    }

    render() {
        const {tasks, taskName, loader, openModal, isDuplicateName} = this.state
        return (
            <div className="to-do">
                <Header/>
                <Loader loader={loader}/>
                <TasksList tasks={tasks} loader={loader} onDelete={this.deleteHandler} onChecked={this.checkedHandler}/>
                <AddTask openModal={openModal} openModalHandler={this.openModalHandler}/>
                {openModal &&
                <ModalDialog value={taskName}
                             isDuplicateName={isDuplicateName}
                             closeModal={this.closeModal}
                             addTask={this.addTaskHandler}
                             changeInput={this.handleChange}/>}
            </div>
        )
    }
}
