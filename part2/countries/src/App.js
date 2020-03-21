import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Countries from './components/Countries'
import Filter from './components/Filter'


const App = () => {
  const [countries, setCountries] = useState([])
  const [newPattern, setNewPattern] = useState('')
  const [newFiltered, setNewFiltered] = useState([])

  const api_key = process.env.REACT_APP_API_KEY
  console.log(api_key)
  const hook = () => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }
  console.log('Countries loaded: ', countries.length)
  useEffect(hook, [])
  return(
    <div>
      <Filter countries={countries} setNewFiltered={setNewFiltered} newPattern={newPattern} setNewPattern={setNewPattern} />
      <Countries countries={newFiltered} setNewFiltered={setNewFiltered} api_key={api_key}/>
    </div>
  )
}

export default App;
