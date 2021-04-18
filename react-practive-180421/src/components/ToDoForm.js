import React from 'react'

const ToDoForm = props => {
  return (
    <form>
      <input
        onChange={e => props.changeFormInput(e.target.value)}
        placeholder='enter your to-do here'
      />
      <button>Add To-Do</button>
    </form>
  )
}

export default ToDoForm
