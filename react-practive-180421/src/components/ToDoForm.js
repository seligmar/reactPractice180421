import React from 'react'

const ToDoForm = props => {
  const handleSubmission = e => {
    e.preventDefault()
    props.addToDo(e.target[0].value)
    props.clearForm()
  }
  const handleChange = e => props.changeFormInput(e.target.value)

  return (
    <form onSubmit={handleSubmission}>
      <input
        // pass the form input back and forth to ensure the DOM and the code are linked
        value={props.formInput}
        onChange={handleChange}
        placeholder='enter your to-do here'
      />
      <button>Add To-Do</button>
    </form>
  )
}

export default ToDoForm
