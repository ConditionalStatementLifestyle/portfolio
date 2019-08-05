import React from 'react'
import './App.css'
import Skills from './Pages/Skills'
import About from './Pages/About'
import Projects from './Pages/Projects'
import NotFound from './Pages/NotFound'
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom'
import Navbar from './Components/Navbar'
import BottomLinks from './Components/BottomLinks';


function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path='/' render={() => <Redirect to='/about'/>}/>
          {/* <Route exact path='/intro' render={() => <Intro/>}/> */}
          <Route exact path='/skills' render={() => <Skills/>}/>
          <Route exact path='/about' render={() => <About/>}/>
          <Route exact path='/projects' render={() => <Projects/>}/>
          <Route exact path='/404' render={() => <NotFound />}/>
          <Route path='*' render={() => <Redirect to='/404'/>} />
        </Switch>
      </Router>
      <BottomLinks/>
    </div>
  );
}

export default App;
