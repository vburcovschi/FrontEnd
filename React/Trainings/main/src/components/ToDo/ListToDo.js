import React, { Component } from 'react';
import Item from './Item';
import Button from './Button';

class ListToDo extends Component {
    state = {
        tasks: [
            { id: 1, text: 'Task 1', completed: false },
            { id: 2, text: 'Task 2', completed: false },
            { id: 3, text: 'Task 3', completed: true },
            { id: 4, text: 'Task 4', completed: false },
            { id: 5, text: 'Task 5', completed: false },
            { id: 6, text: 'Task 6', completed: true },
            { id: 7, text: 'Task 7', completed: false },
            { id: 8, text: 'Task 8', completed: false },
            { id: 9, text: 'Task 9', completed: false },
            { id: 10, text: 'Task 10', completed: false },
        ]
    };

    handleTaskCompletion = (taskId) => {
        this.setState({
            tasks: this.state.tasks.map(task =>
                task.id === taskId ? { ...task, completed: !task.completed } : task
            )
        });
    };

    getCompletedTasksCount = () => {
        return this.state.tasks.filter(task => task.completed).length;
    };

    render() {
        const { tasks } = this.state;
        return (
            <div className="list-container">
                {tasks.map(task => (
                    <Item key={task.id} task={task} onTaskCompletion={this.handleTaskCompletion} />
                ))}
                <Button
                    onClick={() => alert(`Количество выполненных задач: ${this.getCompletedTasksCount()}`)}
                    className="button"
                />
            </div>
        );
    }
}

export default ListToDo;
