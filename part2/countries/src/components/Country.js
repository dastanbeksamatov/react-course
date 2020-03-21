import React from 'react'
//import axios from 'axios'
const Country = ({countries, api_key}) =>{
  // const test = () => {
  //   axios
  //     .get(`http://api.openweathermap.org/data/2.5/weather?q=Bern&appid=${api_key}`)
  //     .then(response=>{
  //       console.log(response.data)
  //     })
  //   }


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
          <h3>Weather in {country.capital}:</h3>

        </div>
        )
      }
    </div>
  )
}

export default Country
