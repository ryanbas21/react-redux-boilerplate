import React from 'react';


const TodoField = props =>
            <div>
              <input ref={ input => props.todo = input } onKeyDown={(e) => props.addTodo(e)} type='text' />
              <button type='submit' onClick={(e) => props.addTodo(e)}>Add</button>
            </div>

export default TodoField;
