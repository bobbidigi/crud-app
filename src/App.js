import React, {useState, useEffect} from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import './components/AvengerForm';
import AvengerForm from './components/AvengerForm';
import AvengerList from './components/AvengerList';
import {avengersData} from './data';


function App() {
  const [avengers, setAvengers] = useState(avengersData);

  useEffect(() => {
    if (avengers.length === 0) {
      if (localStorage.getItem('avengers')) {
        setAvengers(JSON.parse(localStorage.getItem('avengers')));
      }
    }
  }, [])
  useEffect(() => {
    if (localStorage.getItem('avengers') && JSON.parse(localStorage.getItem('avengers').length !== avengers.length)) {
      localStorage.setItem('avengers', JSON.stringify(avengers));
    } else {
      localStorage.setItem('avengers', JSON.stringify(avengers));
    }
  }, [avengers])

  const deleteAvenger = (id) => {
    const newAvenger = avengers.filter((avenger) => avenger.id !== id)
    setAvengers(newAvenger);
  }


  return (
    <div className="App">
      <Switch>
        <Route exact path='/' 
          render={props=> <AvengerList
          {...props} 
          avengers={avengers}
          deleteAvenger={deleteAvenger}
          />} />
        <Route path='/addAvenger' 
          render={props=> <AvengerForm {...props} 
          setAvengers={setAvengers} 
          avengers={avengers}
          edit={false}
          />} />
        <Route path='/editAvenger/:id' 
          render={props=> <AvengerForm {...props} 
          setAvengers={setAvengers} 
          avengers={avengers}
          edit={true}
          />} />
      </Switch>
    </div>
  );
}

export default App;
