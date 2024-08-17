import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'
import Player from './Player'
import Teacher from './Teacher'

function App() {

  const players = ['Tanjim Sakib', 'Sakib Al Hasan', 'Masrafi Ben Murtoza', 'Liton Dash', 'Afif Hossin']
  const teachers = [
    {id: 1, name:'Numeri Sattar Apar', age: 30},
    {id: 2, name:'Apurbo Opu', age: 35},
    {id: 3, name:'Kazi Rakibul Hasan', age: 22},
    {id: 4, name:'Hasnat Shuvro', age: 23},
    {id: 5, name:'Abhi Datta Tushar', age: 30},

  ]

  return (
    <>
      <h1>Vite + React</h1>
      {/* <Device name="Laptop" price="55"></Device>
      <Device name="Mobile" price="12"></Device>
      <Device name="Watch" price="6"></Device>
      <h2>My name is Nazmul Hasan</h2>
      <Person></Person>
      <Student grade="4" score="6.3"></Student>
      <Student grade="3.4" score="7"></Student>
      <Student></Student> */}

      {/* <Todo task="Basic React" isDone={true}></Todo>
      <Todo task="Core Concepts" isDone={false}></Todo>
      <Todo task="Try JSX" isDone={true}></Todo> */}

      <Player name="Sakib Al Hasan"></Player>
      {
        players.map(player => <Player name={player}></Player>)
      }
      {
        teachers.map(teacher => <Teacher teacher={teacher}></Teacher>)
      }
    </>
  )
}

function Device(props){
  return(
    <h3>Device Name {props.name}. Price: {props.price}</h3>
  )
}

function Person(){
  const name = 'Nazmul Hasan';
  const age = 20;
  return(
    <div  className='person'>
      <h2>Hello {name}. Your age is {age}</h2>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi itaque labore recusandae quis quam quos provident earum laudantium animi voluptate!</p>
    </div>
  )
}

function Student({grade=0, score=0}){
  console.log(grade, score);
  const studentStyle = {
    width: '500px',
    margin: '0 auto',
    border: '2px solid green',
    borderRadius: '5px',
    padding: '5px',
    marginTop: '15px'

  }
  return(
    <div style={studentStyle}>
      <h4>My name is Nazmul Hasan</h4>
      <p>Grade : {grade}</p>
      <p>Score : {score}</p>
    </div>
  )
}

export default App
