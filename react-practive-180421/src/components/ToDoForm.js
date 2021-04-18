import React from 'react'

const ToDoForm = props => {
  const handleSubmission = e => {
    e.preventDefault()
    props.addToDo(e.target[0].value)
  }
  const handleChange = e => props.changeFormInput(e.target.value)

  return (
    <form onSubmit={handleSubmission}>
      <input onChange={handleChange} placeholder='enter your to-do here' />
      <button>Add To-Do</button>
    </form>
  )
}

export default ToDoForm
