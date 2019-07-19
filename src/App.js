import React from 'react';
import './App.css';
import Intro from './Pages/Intro'
import Home from './Pages/Home'
import Projects from './Pages/Projects'
import NotFound from './Pages/NotFound'
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom'
import Navbar from './Components/Navbar'


function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path='/' render={() => <Redirect to='/intro'/>}/>
          <Route exact path='/intro' render={() => <Intro/>}/>
          <Route exact path='/home' render={() => <Home/>}/>
          <Route exact path='/projects' render={() => <Projects/>}/>
          <Route exact path='/404' render={() => <NotFound />}/>
          <Route path='*' render={() => <Redirect to='/404'/>} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
