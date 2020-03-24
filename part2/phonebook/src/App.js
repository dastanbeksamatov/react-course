import React, { useState, useEffect } from 'react';
import Persons from './components/Persons';
import PersonForm from './components/PersonForm';
import Filter from './components/Filter';
import noteService from './service/notes'

const App = () => {
  const [ persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ sorted, setNewSorted ] = useState([...persons])


  console.log("persons: ", persons)
  useEffect(noteService.getAll()
    .then(initialNotes=>{
      setNotes(initialNotes)
    }), [])

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter persons = {persons} setNewSorted={setNewSorted}/>
      <h2>Add new record</h2>
      <PersonForm
      persons={persons} setPersons={setPersons} newNumber={newNumber} setNewNumber={setNewNumber} newName={newName} setNewName={setNewName}
      />
      <h2>Numbers</h2>
      <Persons persons={sorted} />
    </div>
  )
}

export default App;
