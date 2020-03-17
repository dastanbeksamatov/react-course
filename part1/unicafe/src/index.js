import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Button = ({handleClicked, text}) => {
  return (
    <button onClick={handleClicked}>{text}</button>
  )
}

const Stat = ({text, value}) =>
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>

const Stats = ({good, neutral, bad}) => {
  const total = good + bad + neutral
  if (total>0){
    const average = (good*1 + bad*(-1))/total
    const pos = (good/total)*100

    return (
      <div>
        <h1>Stats</h1>
        <table>
          <tbody>
            <Stat text="Good" value={good} />
            <Stat text="Neutral" value={neutral}/>
            <Stat text="Bad" value={bad} />
            <Stat text="Total" value={total} />
            <Stat text="Average" value={average}/>
            <Stat text="Positive (%)" value={pos}/>
          </tbody>
        </table>
      </div>
    )
  }
  return (
    <div>
    <h1>Stats</h1>
    <p>No feedback so far.</p>
    </div>
  )

}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const handleGood = () =>{
    setGood(good+1)
  }
  const handleNeutral = () =>{
    setNeutral(neutral+1)
  }
  const handleBad = () => {
    setBad(bad+1)
  }
  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClicked={handleGood} text="good"/>
      <Button handleClicked={handleNeutral} text="neutral"/>
      <Button handleClicked={handleBad} text="bad"/>

      <Stats good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)
