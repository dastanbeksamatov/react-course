import React from 'react';
import { useResource, useField } from './hooks'

const App = () => {
  const [ persons, personService ] = useResource('http://localhost:3005/persons')
  const [ notes, noteService ] = useResource('http://localhost:3005/notes')
  const content = useField('')
  const number = useField('')
  const name = useField('')

  const handleNoteSubmit = (event) => {
    event.preventDefault()
    noteService.add({ content: content.value })
  }

  const handlePersonSubmit = (event) => {
    event.preventDefault()
    personService.add({ name: name.value, number: number.value})
  }

  return (
    <div>
      <div>
        <h2>notes</h2>
        <form onSubmit={handleNoteSubmit}>
          <input {...content} />
          <button>create</button>
        </form>
        {notes.map(n => <p key={n.id}>{n.content}</p>)}
        </div>
      <div>
        <h2>Phonebook</h2>
        <form onSubmit={handlePersonSubmit}>
        name <input {...name} /> <br/>
        number <input {...number} />
        <button>create</button>
      </form>
      {persons.map(n => <p key={n.id}>{n.name} {n.number}</p>)}
       </div>
    </div>
  )
}

export default App;
