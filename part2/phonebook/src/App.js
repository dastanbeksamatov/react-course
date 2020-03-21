import React, { useState, useEffect } from 'react';
import Persons from './components/Persons';
import PersonForm from './components/PersonForm';
import Filter from './components/Filter';
import axios from 'axios';

const App = () => {
  const [ persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ sorted, setNewSorted ] = useState([...persons])
  const [ newPat, setNewPat ] = useState([''])

  const hook = () =>{
    console.log("running")
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log("promise fullfilled")
        setPersons(response.data)
      })
  }
  console.log("persons: ", persons)
  useEffect(hook, [])

  const makeFilter = (event) => {
    setNewPat(event.target.value.toLowerCase())
    event.preventDefault()
    setNewSorted(persons.filter(person => person.name.toLowerCase().includes(newPat)))
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter newPat={newPat} makeFilter={makeFilter} />
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
