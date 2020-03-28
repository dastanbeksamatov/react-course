const express = require('express')
const app = express()

app.use(express.json())

const persons = [
    {
      "name": "Arto Hellas",
      "number": "040-123456",
      "id": 1
    },
    {
      "name": "NewUser",
      "number": "0",
      "id": 4
    },
    {
      "name": "newUser",
      "number": "+90930123",
      "id": 5
    },
    {
      "name": "dastan",
      "number": "1",
      "id": 6
    },
    {
      "name": "some",
      "number": "+13231231231",
      "id": 8
    }
]

app.get('/', (req, res)=> {
  res.send('<h1>Find persons at ./api/notes')
})

app.get('/api/persons', (req, res) => {
  res.json(persons)
})

app.get('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id)
  const person = persons.find(obj=>obj.id===id)
  console.log(person)
  if(person){
    res.json(person)
  }
  else{
    res.status(404).end()
  }
})

app.get('/info', (req, res) => {
  const size = persons.length
  const date = new Date().toDateString()
  const time = new Date().toLocaleTimeString()

  res.send(
    `<p>Phonebook has ${size} entries rn</p>
    <h4>${date} ${time} GMT +0200 (Eastern European Standart Time)</h4>`)
})

const PORT = 3000

app.listen(PORT)

console.log(`Running on ${PORT}`)
