import React, { useState, useEffect } from 'react';
import Persons from './components/Persons';
import PersonForm from './components/PersonForm';
import Filter from './components/Filter';
import personsService from './services/persons';
import Notification from './components/Notification';

const App = () => {
  const [ persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ sorted, setNewSorted ] = useState([...persons])
  const [ message, setNewMessage ] = useState("")
  const [ type, setType ] = useState(true) //the type of the message to be displayed

  useEffect(() => {
    personsService
    .getAll()
    .then(initialPersons=>{
      setPersons(initialPersons)
    })
  }, [])

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification type={type} message={message} />
      <Filter persons = {persons} setNewSorted={setNewSorted}/>
      <h2>Add new record</h2>
      <PersonForm
      persons={persons} setPersons={setPersons}
      newNumber={newNumber} setNewNumber={setNewNumber}
      newName={newName} setNewName={setNewName}
      personsService={personsService} setNewMessage={setNewMessage}
      setType={setType}
      />
      <h2>Numbers</h2>
      <Persons persons={sorted} setType={setType} setNewMessage={setNewMessage}
       personsService={personsService} setPersons = {setPersons}/>
    </div>
  )
}

export default App;
