import React from 'react';

const Persons = ({persons}) => {
  return(
    <div>
      <ul>
        {persons.map(obj =>
          <li key={obj.id}> {obj.name}: {obj.number}</li>
        )}
      </ul>
    </div>

  )
}
export default Persons;
