import React from 'react';
import './App.css';
import Menu from './Pages/Home'
import LoginPage from './Pages/LoginPage'
import Search from './Pages/Search'
import Profile from './Pages/Profile'
import NotFound from './Pages/NotFound'
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom'
import Navbar from './Components/Navbar'


function App() {
  return (
    <div>
        <Router>
          {/* {this.state.siteEntered || this.state.user.username !== '' ? null : <Redirect to='/home'/>} */}
          <Switch>
            <Route exact path='/' render={() => <Redirect to='/home'/>}/>
            <Route exact path='/home' render={() => <Menu user={this.state.user} reviews={this.state.reviews.length} getProfileData={this.getProfileData}/>}/>
            <Route exact path='/search' render={() => <Search user={this.state.user} pushReviewToProfile={this.pushReviewToProfile} alreadyReviewed={this.state.alreadyReviewed}/>}/>
            <Route exact path='/profile' render={() => <Profile user={this.state.user} reviews={this.state.reviews} getProfileData={this.getProfileData} hopmeter={this.state.hopmeter} updateReview={this.updateReview} removeReview={this.removeReview}/>}/>
            <Route exact path='/login' render={() => <LoginPage isLoading={this.state.isLoading} setLoading={this.setLoading} setSiteEntered={this.setSiteEntered} setStateUsernameEmailToken={this.setStateUsernameEmailToken} user={this.state.user}/>}/>
            <Route exact path='/404' render={() => <NotFound />}/>
            <Route path='*' render={() => <Redirect to='/404'/>} />
          </Switch>
        </Router>
      </div>
  );
}

export default App;
