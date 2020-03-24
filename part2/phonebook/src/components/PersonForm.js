import React from 'react';

const PersonForm = (props) => {

  const addRecord = (event) => {
    event.preventDefault()
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
      <div>name: <input onChange={handleChange}/></div>
      <div>phone: <input onChange={handlePhone}/></div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )}

export default PersonForm;
