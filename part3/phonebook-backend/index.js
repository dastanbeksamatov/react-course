const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(express.json());



morgan.token('body', function(req,res){
  return JSON.stringify(req.body);
});
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'));
let persons = [
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
];

app.get('/', (req, res)=> {
  res.send('<h1>Find persons at ./api/notes');
});

app.get('/api/persons', (req, res) => {
  res.json(persons);
});

app.get('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id);
  const person = persons.find(obj=>obj.id===id);
  console.log(person);
  if(person){
    res.json(person);
  }
  else{
    res.status(404).end();
  }
});

app.get('/info', (req, res) => {
  const size = persons.length;
  const date = new Date().toDateString();
  const time = new Date().toLocaleTimeString();

  res.send(
    `<p>Phonebook has ${size} entries rn</p>
    <h4>${date} ${time} GMT +0200 (Eastern European Standart Time)</h4>`);
});

app.delete('/api/persons/:id', (req, res)=>{
  const id = Number(req.params.id);
  persons = persons.filter(obj=>obj.id!==id);
  res.status(204).end();
});
const generateId = () =>{
  return Math.floor(Math.random() * Math.floor(1000000));
};

app.post('/api/persons', (req, res)=>{
  const pId = generateId();
  const body = req.body;
  if(!body.name || !body.number){
    return res.status(404).json({
      error: "missing name or number"
    });
  }
  else if(!persons.every(person=>person.name.localeCompare(body.name))){
    return res.status(404).json({
      error: "name already exists"
    });
  }
  const person = {
    "name": body.name,
    "number": body.number,
    "id": pId
  };
  persons = persons.concat(person);
  res.json(person);
});

const PORT = 3000;

app.listen(PORT);

console.log(`Running on ${PORT}`);
