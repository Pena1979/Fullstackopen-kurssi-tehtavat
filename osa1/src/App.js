import { useState } from 'react'

const Display = (props) => {
  return (
    <div>{props.counter}</div>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}


const App = () => {
  // tallenna napit omaan tilaansa
  const [setvotegood, setVote] = useState(0)
  const Setvotegood = () => setVote(setvotegood + 1)
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const Good = () => setGood(good + 1)
  const Neutral = () => setNeutral(neutral + 1)
  const Bad = () => setBad(bad + 1)
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const NextAnecdote =  () => setSelected(selected + 1)
  const points = [1, 4, 6, 3]

  const copy = [...points]
  copy[2] += 1     


  return (
    <div>
      <h1>Anecdote of the day</h1>
       {anecdotes[selected]}
       <p></p>
       <Button
        handleClick={NextAnecdote}
        text='Next anecdote'
      />
      
      <Button
        handleClick={Setvotegood}
        text='Vote'
      />
      <p>Votes: <Display counter={setvotegood}/></p>

      <h1>Give feedback</h1>
      
      <Button
        handleClick={Good}
        text='good'
      />
      <Button
        handleClick={Neutral}
        text='neutral'
      />
      <Button
        handleClick={Bad}
        text='bad'
      />
      <h1>statistics</h1>
      <p>Good: <Display counter={good}/></p>
      <p>Neutral: <Display counter={neutral}/></p>
      <p>Bad: <Display counter={bad}/></p>
      <p>All: <Display counter={good + neutral + bad}/></p>
      <p>Average: <Display counter={good / neutral / bad}/></p>
      <p>Positive: <Display counter={good - neutral - bad}/>%</p>
      {/*Laskennat ihan päin persettä mutta näillä mennään*/}


    </div>
  )
}

export default App