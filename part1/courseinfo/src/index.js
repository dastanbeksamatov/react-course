import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
  console.log(props)
  return (
    <div>
      <h1>{props.course.name}</h1>
    </div>
  )
}

const Part = (props) => {
  return(
    <div>
      <p>{props.part}: {props.excercises}</p>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part = {props.course.parts[0].name} excercises = {props.course.parts[0].excercises} />
      <Part part = {props.course.parts[1].name} excercises = {props.course.parts[1].excercises} />
      <Part part = {props.course.parts[2].name} excercises = {props.course.parts[2].excercises} />
    </div>
  )
}

const Total = (props) => {
  const arr = props.course.parts
  let sum = 0
  arr.forEach(value => {
    sum += value.excercises
  })
  return (
    <div>
      <p>Total excersises: {sum} </p>
    </div>
  )
}


const App = () => {
  const course = {
    name: "Half Stack application development",
    parts : [
    {
      name : "Fundamentals of React",
      excercises : 10
    },
    {
      name : "Using props to pass data",
      excercises : 7
    },
    {
      name : "State of a component",
      excercises : 14
    }
  ]
}


  return (
    <div>
      <Header course = {course} />
      <Content course = {course} />
      <Total  course = {course} />
    </div>
  )
}
ReactDOM.render(<App />, document.getElementById('root'))
