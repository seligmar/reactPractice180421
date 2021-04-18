import './App.css'
import React from 'react'

class App extends React.Component {
  state = {
    formInput: '',
    todos: [
      {
        task: 'sweep all the things',
        id: 1,
        completed: false
      },
      {
        task: 'dishes',
        id: 1,
        completed: false
      },
      {
        task: 'win at coding',
        id: 1,
        completed: false
      }
    ]
  }

  render () {
    return (
      <div className='App'>
        <h1>To-Do App</h1>
        <form>
          <input placeholder='enter your to-do here' />
          <button>Add To-Do</button>
        </form>
        <ul>
          <li>{this.state.todos}</li>
        </ul>
      </div>
    )
  }
}

export default App
