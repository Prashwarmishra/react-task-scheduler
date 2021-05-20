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

  const handleDeleteTask = (id) => {
    let items = tasks.filter((task) => task.id !== id);
    setTasks(items);
  }

  return (
    <div className="container">
        <Header title = 'Task-Tracker'/>
        {
          tasks.length > 0 ? <Tasks 
          tasks = {tasks}
          onDelete = {handleDeleteTask}
        /> : <h3>No tasks to show</h3>
        }
    </div>
  );
}

export default App;
