import React, { Component } from 'react'
import { render } from 'react-dom'
import TodoField from '../components/todo-field';

class AppContainer extends Component {
    constructor(props){
        super(props);
        this.addTodo = this.addTodo.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
        this.editTodo = this.editTodo.bind(this);
    }
    addTodo(){}
    editTodo(){}
    deleteTodo(){}
    render() {
        return (
            <div>
                <TodoField />
            </div>
        )
    }
}


export default AppContainer
