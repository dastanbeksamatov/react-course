import React from 'react';

const Header = ({name}) =>
  (
    <h1>{name}</h1>
  )

const Part = ({part, excercises}) =>
  (
      <p>{part}: {excercises}</p>
  )

const Content = ({parts}) => {
  return (
    <div>
      {parts.map((part, i) =>
        <Part key={part.id} part= {part.name} excercises={part.excercises} />
      )}
    </div>
  )
}

const Total = ({parts}) => {
  let sum = 0
  return (
    <div>
      <p><b>Total excersises: {parts.reduce(function(sum, i){
        return sum + i.excercises
      }, 0)}</b>
      </p>
    </div>
  )
}

const Course = ({courses}) => {
  return(
    <div>
      {courses.map(course =>
        <div key={course.id}>
          <Header name = {course.name} />
          <Content parts={course.parts} />
          <Total parts={course.parts} />
        </div>
      )}
    </div>
  )
}

export default Course
