import React from 'react'

const Filter = (props) =>{

  const handleChange = (event) =>{
    event.preventDefault()
    console.log("pat is: ", event.target.value)
    const copy = [...props.countries]
    props.setNewFiltered(
      copy.filter(country =>
         country.name.toLowerCase().includes(event.target.value)
       )
     )
    props.setNewPattern(event.target.value.toLowerCase())
  }
  return (
    <input onChange={handleChange}/>
  )
}

export default Filter
