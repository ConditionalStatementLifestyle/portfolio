import React, { useState, useEffect } from 'react'
import './App.scss'
import { Tech, About, Projects } from './Pages/index';
import NotFound from './Pages/NotFound'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer';
import Helmet from 'react-helmet';
import { 
  CSSTransition, 
  TransitionGroup 
} from 'react-transition-group';


function App() {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', updateWidth);
  })

  const updateWidth = () => {
    setWindowWidth(window.innerWidth)
  }

  return (
    <div>
      <Helmet>
        <style>{'body { background-image: linear-gradient(90deg, #FFFFFF  0%, #BCBCBC 100%); }'}</style>
      </Helmet>
      <Router>
        <Navbar windowWidth={windowWidth}/>
        <Route
          render={({ location }) => {
            const { pathname } = location;
            return (
              <TransitionGroup>
                <CSSTransition
                  key={pathname}
                  classNames="page"
                  timeout={{
                    enter: 750,
                    exit: 750
                  }}
                >
                  <Route
                    location={location}
                    render={() => (
                      <Switch>
                        <Route exact path='/' render={() => <Redirect to='/about' />} />
                        <Route exact path='/tech' render={() => <Tech windowWidth={windowWidth}/>} />
                        <Route exact path='/about' render={() => <About windowWidth={windowWidth}/>} />
                        <Route exact path='/projects' render={() => <Projects windowWidth={windowWidth}/>} />
                        <Route exact path='/404' render={() => <NotFound />} />
                        <Route path='*' render={() => <Redirect to='/404' />} />
                      </Switch>
                    )}
                  />
                </CSSTransition>
              </TransitionGroup>
            )
          }}
        />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
