import React, { useState } from 'react';
import Persons from './components/Persons';
import PersonForm from './components/PersonForm';
import Filter from './components/Filter';

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: '+1-802-100-2003' },
    { name: 'Dastan Samatov', phone: '+1-508-100-1998'},
    { name: 'Jack Ma', phone: '+1-602-300-2001'},
    { name: 'Jack Smith', phone: '+1-608-200-1222' },
    { name: 'Asan Usonov', phone: '+1-508-123-4567' }
  ])
  const [ newName, setNewName ] = useState('')
  const [ newPhone, setNewPhone ] = useState('')
  const [ sorted, setNewSorted ] = useState([...persons])
  const [ newPat, setNewPat ] = useState([''])

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
      persons={persons} setPersons={setPersons} newPhone={newPhone} setNewPhone={setNewPhone} newName={newName} setNewName={setNewName}
      />
      <h2>Numbers</h2>
      <Persons persons={sorted} />
    </div>
  )
}

export default App;
