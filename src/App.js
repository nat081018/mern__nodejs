import React from 'react';
import {Route} from "react-router-dom"
import './App.css';

import Navbar from "./components/navbar/navbar.component"
import CreateExrcise from "./components/createExercise/createExercise.component"
import CreateUser from "./components/createUser/createUser.component"
import EditExrecise from "./components/editExercise/editExercise.component"
import ExrcisesList from "./components/exercisesList/exercisesList.comonent"



function App() {
  return (
    <div className="App">
      <Navbar />
      <Route exact path="/" component={ExrcisesList} />
      <Route  path="/create" component={CreateExrcise} />
      <Route path="/edit/:id" component={EditExrecise} />
      <Route path="/user" component={CreateUser} />
    </div>
  );
}

export default App;
