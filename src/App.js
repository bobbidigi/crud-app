import React, {useState, useEffect} from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import './components/TaskForm';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';


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
      <Switch>
        <Route exact path='/' render={props=> <TaskList {...props} tasks={tasks}/>} />
        <Route path='/addTask' 
          render={props=> <TaskForm {...props} 
          setTasks={setTasks} 
          tasks={tasks}
          edit={false}
          />} />
        <Route path='/editTask/:id' 
          render={props=> <TaskForm {...props} 
          setTasks={setTasks} 
          tasks={tasks}
          edit={true}
          />} />
      </Switch>
          
    </div>
  );
}

export default App;
