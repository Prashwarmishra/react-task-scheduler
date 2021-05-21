import './App.css';
import React from 'react';
import {useState} from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

function App() {

  let [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Buy Stationary',
        day: 'May 25th',
        reminder: false,
    },
    {
        id: 2,
        text: 'Vaccine Appointment',
        day: 'May 22nd at 2:00pm',
        reminder: true,
    }, 
    {
        id: 3,
        text: 'Compliance Meeting',
        day: 'May 24th at 9:00am',
        reminder: true,
    }
  ]);

  //state to show the form to add tasks
  const [showAddTask, setShowAddTask] = useState(false);

  //function to toggle add task form
  const toggleAddTask = () => {
    setShowAddTask(!showAddTask);
  }

  //function to add a task
  const addTask = (task) => {
    console.log(task);
    const newTask = {
      id: tasks.length+1,
      ...task,
    }
    setTasks([...tasks, newTask]);
  }

  //function to delete a task
  const handleDeleteTask = (id) => {
    let items = tasks.filter((task) => task.id !== id);
    setTasks(items);
  }

  //function to toggle task reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) => {
        if(task.id === id){
          task.reminder = !task.reminder;
        }
        return task;
      })
    )
  }

  return (
    <div className="container">
        <Header 
          title = 'Task-Tracker'
          onAddToggle = {toggleAddTask}
          showAddTask = {showAddTask}
        />
        {showAddTask && <AddTask onAddTask = {addTask}/>}
        {
          tasks.length > 0 ? <Tasks 
          tasks = {tasks}
          onDelete = {handleDeleteTask}
          onToggle = {toggleReminder}
        /> : <h3>No tasks to show</h3>
        }
    </div>
  );
}

export default App;
