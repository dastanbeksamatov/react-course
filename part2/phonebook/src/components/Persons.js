import React from 'react';

const Persons = ({persons, personsService, setPersons}) => {
  const handleClick = (event) => {
    event.preventDefault()
    const pId = event.target.value
    if(window.confirm(`Do you want to delete ${event.target.name}?`)){
      personsService
        .remove(pId)
        .then(() => {
          return personsService.getAll()
        })
        .then(newPersons => {
          setPersons(newPersons)
        })
        .catch(error=>{
          console.log("failed to delete")
        })
      }
    console.log("canceled event")
  }
  return(
    <div>
      <ul>
        {persons.map(obj =>
          <div key={obj.id}>
          <li> {obj.name}: {obj.number}</li>
          <button type="submit" name = {obj.name} value = {obj.id} onClick={handleClick}>Delete</button>
          </div>
        )}
      </ul>
    </div>

  )
}
export default Persons;
