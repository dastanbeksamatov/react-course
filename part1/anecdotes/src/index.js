import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({handleClicked, text}) =>
    <button onClick={handleClicked}>{text}</button>

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVote] = useState([0, 0, 0, 0 ,0, 0])
  function randomInt(min, max){
    min = Math.ceil(min);
    max = Math.ceil(max);
    return Math.floor(Math.random() * (max-min+1) + min);
  }
  const rand = randomInt(0, anecdotes.length-1)
  const handleSelected = () => {
    setSelected(rand)
  }
  const handleVoted = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVote(copy)
  }
  let max = votes[0]
  let ind = 0
  for (var i = 1; i<6; i++){
    if (votes[i]>max){
      max = votes[i]
      ind = i
    }
  }
  return (
    <div>
      <h2>Anecdote of the day</h2>
      {props.anecdotes[selected]}<br/>
      <p>Was voted {votes[selected]}</p>
      <Button handleClicked={handleVoted} text="Vote"/>
      <Button handleClicked={handleSelected} text="Random Anecdote Generator"/>

      <br/>
      <h2>Anecdote with most votes </h2>
      {props.anecdotes[ind]}
      <p>It has {max} votes</p>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
