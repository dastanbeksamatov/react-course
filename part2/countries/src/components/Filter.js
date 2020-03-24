import React from 'react'

const Filter = (props) =>{

  const handleChange = (event) =>{
    event.preventDefault()
    props.setNewFiltered(
      props.countries.filter(country =>
         country.name.toLowerCase().includes(event.target.value)
       )
     )
  }
  return (
    <input onChange={handleChange}/>
  )
}

export default Filter
