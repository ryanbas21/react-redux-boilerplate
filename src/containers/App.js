import React, { Component } from 'react'
import { render } from 'react-dom'
import TodoField from '../components/todo-field';
import { store } from '../store/store'

class AppContainer extends Component {
    constructor(props){
        super(props);
        this.todo = '';
        this.addTodo = this.addTodo.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
        this.editTodo = this.editTodo.bind(this);
    }
    addTodo(e){
        if (e.keyCode === 13){
            console.log(e.target.value);
        } else {
            console.log('this is this.todo', this.todo)
        }
    }
    editTodo(){}
    deleteTodo(){}
    render() {
        return (
            <div>
                <TodoField addTodo={this.addTodo} todo={this.todo} />
            </div>
        )
    }
}


export default AppContainer
