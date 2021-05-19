import './App.css';
import React from 'react';
import {useState} from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {

  let [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Buy Stationary',
        day: 'May 25th',
        reminder: 'false',
    },
    {
        id: 2,
        text: 'Vaccine Appointment',
        day: 'May 22nd at 2:00pm',
        reminder: 'true',
    }, 
    {
        id: 3,
        text: 'Compliance Meeting',
        day: 'May 24th at 9:00am',
        reminder: 'true',
    }
  ])

  return (
    <div className="container">
        <Header title = 'Task-Tracker'/>
        <Tasks tasks = {tasks}/>
    </div>
  );
}

export default App;
