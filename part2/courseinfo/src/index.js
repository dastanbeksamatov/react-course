import React from 'react';
import ReactDOM from 'react-dom';
import Course from './components/Course'


const App = () => {
  const courses = [
  {
    id: 1,
    name: "Half Stack application development",
    parts : [
      {
        name : "Fundamentals of React",
        excercises : 10,
        id: 1
      },
      {
        name : "Using props to pass data",
        excercises : 7,
        id: 2
      },
      {
        name : "State of a component",
        excercises : 14,
        id: 3
      },
      {
        name : "Python",
        excercises : 12,
        id: 4
      },
      {
        name : "API",
        excercises : 13,
        id: 5
      }

    ]
  },
  {
    id:2,
    name: "Full Stack App Dev",
    parts: [
      {
        name: "Javascript",
        excercises: 9,
        id:1
      },
      {
        name: "Python Fundamentals",
        excercises: 12,
        id:2
      },
      {
        name: "Django",
        excercises: 15,
        id:3
      }
    ]
  }
]


  return (
    <div>
      <Course courses={courses} />
    </div>
  )
}
ReactDOM.render(<App />, document.getElementById('root'))
