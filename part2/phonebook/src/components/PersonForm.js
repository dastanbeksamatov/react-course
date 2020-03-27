import React from 'react';

const PersonForm = (props) => {

  const addRecord = (event) => {
    event.preventDefault()
    const unique = props.persons.every(item =>
          item.name.localeCompare(props.newName)
    )
    const ids = props.persons.map(obj => obj.id)
    if (unique){
      const nameObject = {
        name: props.newName,
        number: props.newNumber,
        id: Math.max(...ids)+1
      }
      props.setNewName('')
      props.setNewNumber('')
      props.personsService
        .create(nameObject)
        .then(returnedPerson => {
          props.setNewMessage(
            `Added ${nameObject.name}`
          )
          setTimeout(()=>{
            props.setNewMessage(null)
          }, 5000)
          props.setPersons(props.persons.concat(returnedPerson))
        })
        .catch(error => {
          console.log('error')
        })
    }
    else{
      if (window.confirm(`${props.newName} is already in the phonebook, replace the old number with the new one?`)){
        const person = props.persons.filter(obj=> obj.name.includes(props.newName))
        const id = person[0].id
        const newObject = {...person[0], number: props.newNumber}
        props.personsService
          .update(id, newObject)
          .then(response =>{
            props.setNewMessage(
              `Changed ${newObject.name} number to ${props.newNumber}`
            )
            setTimeout(()=>{
              props.setNewMessage(null)
            }, 5000)
            props.setPersons(props.persons.map(obj => obj.id!==id ? obj : response))
          })
          .catch(error => {
            console.log("error")
          })
      }
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
