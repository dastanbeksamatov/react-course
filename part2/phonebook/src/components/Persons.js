import React from 'react';

const Persons = ({persons, personsService, setPersons}) => {
  const handleClick = () => {
    personsService
      .delete(obj.id)
      .then(returnedPersons => {
        setPersons(returnedPersons)
      })
  }
  return(
    <div>
      <ul>
        {persons.map(obj =>
          <li key={obj.id}> {obj.name}: {obj.number}</li> <button type="submit" onClick={handleClick}>Delete</button>
        )}
      </ul>
    </div>

  )
}
export default Persons;
