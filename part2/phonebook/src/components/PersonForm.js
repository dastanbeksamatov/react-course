import React from 'react';

const PersonForm = (props) => {

  const addRecord = (event) => {
    event.preventDefault()
    console.log("tried to add contact")
    const unique = props.persons.every(item =>
          item.name.localeCompare(props.newName)
    )
    if (unique){
      const nameObject = {
        name: props.newName,
        number: props.newPhone,
        id: props.persons.length + 1
      }
      props.setPersons(props.persons.concat(nameObject))
      props.setNewName('')
      props.setNewNumber('')
    }
    else{
      alert(`${props.newName} is already in the phonebook`)
      props.setPersons(props.persons)
      props.setNewName('')
      props.setNewNumber('')
    }
  }

  const handleChange = (event) => {
    props.setNewName(event.target.value)
  }
  const handlePhone = (event) => {
    props.setNewNumber(event.target.value)
  }
  return(
    <form onSubmit={addRecord}>
      <div>name: <input value={props.newName} onChange={handleChange}/></div>
      <div>phone: <input value={props.newNumber} onChange={handlePhone}/></div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )}

export default PersonForm;
