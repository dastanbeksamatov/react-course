import React, { useState } from 'react'
import './App.css'
import Country from './components/Country'
import { useCountry, useField} from './hooks'


const App = () => {
  const nameInput = useField('text')
  const [name, setName] = useState('')
  const country = useCountry(name)

  const fetch = (event) => {
    event.preventDefault()
    setName(nameInput.value)
  }
  console.log(name)

  return (
    <div>
      <form onSubmit={fetch}>
        <input {...nameInput} />
        <button type="submit">find</button>
      </form>
      <Country country={country} />
    </div>
  )
}

export default App
