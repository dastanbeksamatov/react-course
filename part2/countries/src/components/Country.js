import React, {useEffect} from 'react'
import axios from 'axios'
const Country = ({countries, api_key, temp, setTemp}) =>{
  const name = countries.map(obj=>obj.name)
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${api_key}`

  const hook = ()=> {
    axios.get(url).then(response=>{
        const newTemp = {
          temp: response.data.main.temp,
          wind: response.data.wind.speed
        }
        setTemp(newTemp)
        })
  }
  useEffect(hook, [])

  return(
    <div>
      {countries.map((country,i) =>
        <div key={i}>
          <h2>{country.name}</h2>
          <p>capital: {country.capital}</p>
          <p>population: {country.population}</p>
          <h3>languages</h3>
          <ul>{country.languages.map((lang,i)=>
              <li key={i}>{lang.name}</li>
            )}
          </ul>
          <img src={country.flag} alt="flag" width="100"/>
          <h3>Weather in {country.capital}</h3>
          <p>temp: {temp.temp}</p>
          <p>wind: {temp.wind}</p>
        </div>
        )
      }
    </div>
  )
}

export default Country
