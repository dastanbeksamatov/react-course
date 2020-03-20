import React from 'react';

const Persons = ({persons}) => {
  return(
    <div>
      <ul>
        {persons.map((obj,i) =>
          <li key={i}> {obj.name}: {obj.phone}</li>
        )}
      </ul>
    </div>

  )
}
export default Persons;
