import React, {useState, useEffect} from 'react';
import './App.css';
import './components/TaskForm';
import TaskForm from './components/TaskForm';


function App() {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    if (tasks.length === 0) {
      if (localStorage.getItem('tasks')) {
        setTasks(JSON.parse(localStorage.getItem('tasks')));
      }
    }
  }, [])
  useEffect(() => {
    if (localStorage.getItem('tasks') && JSON.parse(localStorage.getItem('tasks').length !== tasks.length)) {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    } else {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }, [tasks])


  return (
    <div className="App">
      <TaskForm setTasks={setTasks} tasks={tasks}/>     
    </div>
  );
}

export default App;
