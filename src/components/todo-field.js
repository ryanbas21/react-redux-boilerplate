import React from 'react';


const TodoField = props =>
            <div>
              <input ref={ input => this.todo = input } onSubmit={props.addTodo} type='text' /><button type='submit' onClick={props.addTodo}>Add</button>
            </div>

export default TodoField;
