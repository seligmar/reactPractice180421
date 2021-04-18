import './App.css'
import React from 'react'
import Title from './components/Title'
import ToDoList from './components/ToDoList'
import ToDoForm from './components/ToDoForm'

class App extends React.Component {
  state = {
    formInput: '',
    todos: [
      {
        task: 'sweep all the things',
        id: 1,
        completed: 'false'
      },
      {
        task: 'dishes',
        id: 2,
        completed: false
      },
      {
        task: 'win at coding',
        id: 3,
        completed: false
      }
    ]
  }

  changeInput = newFormInput => {
    console.log(newFormInput)
    this.setState({ formInput: newFormInput })
  }

  render () {
    return (
      <div className='App'>
        <Title />
        <ToDoForm changeFormInput={this.changeInput} />
        <ToDoList todos={this.state.todos} />
      </div>
    )
  }
}

export default App
