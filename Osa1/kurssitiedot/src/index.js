import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const course = {
      name: 'Half Stack -sovelluskehitys',
      parts: [
      {
          name: 'Reactin perusteet',
          exercises: 10
      },
      {
          name: 'Tiedonvälitys propseilla',
          exercises: 7
      },
      {
          name: 'Komponenttien tila',
          exercises: 14
      }
    ]
}

  return (
    <div>
    <Header course={course.name} />
    <Content parts={course.parts} />
    <Total parts={course.parts} />
  </div>
  )
}

const Header = (props) => {
    return (
    <h1>{props.course}</h1>
    )
}

const Content = (props) => {
    return (
    <>
    <p>
        <Part part={props.parts[0]} />
        </p>
    <p>
        <Part part={props.parts[1]} />
    </p>
    <p>
        <Part part={props.parts[2]} />
    </p>  
    </>
    )
}

const Total = (props) => {
    return (
        <>
        <p>yhteensä {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises} tehtävää</p>
        </>
    )
}

const Part = (props) => {
    return(
        <>
        {props.part.name} {props.part.exercises}
        </>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))