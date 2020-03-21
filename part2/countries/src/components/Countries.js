import React from 'react'
import Country from './Country'
const Countries = ({countries, setNewFiltered, api_key}) =>{
  const handleClick = (event) =>{
    event.preventDefault()
    const one = countries.filter(country =>
         country.name.toLowerCase().includes(event.target.value.toLowerCase())
    )
    setNewFiltered(one)
  }
  if(countries.length<10 && countries.length>1){
    return (
      <div>
        {countries.map((obj,i) =>
          <div key={i}>
            <p>{obj.name} <button value={obj.name} onClick={handleClick}>Show</button></p>
          </div>
          )}
      </div>
    )
  }
  else if(countries.length===1){
    console.log(countries.length)
    return(
      <Country countries={countries} api_key={api_key}/>
        )
  }
  else if(countries.length===0){
    return(
      <p></p>
    )
  }
  else{
    return (
      <p>too many matches</p>
    )
  }
}

export default Countries
