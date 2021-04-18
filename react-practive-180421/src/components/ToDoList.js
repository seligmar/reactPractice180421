import React from 'react'

const ToDoList = props => {
  return (
    <ul>
      {props.todos.map(todo => (
        <li key={todo.id}>{todo.task}</li>
      ))}
    </ul>
  )
}

export default ToDoList
