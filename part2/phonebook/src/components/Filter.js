import React from 'react';

const Filter = ({persons, setNewSorted}) => {

  const handleChange = (event) => {
    const pat = event.target.value.toLowerCase()
    event.preventDefault()
    const copy = persons
    setNewSorted(
      copy.filter(person => person.name.toLowerCase().includes(pat)))
  }
  return(
    <div>filter shown with: <input onChange={handleChange}/></div>
  )
}

export default Filter;
