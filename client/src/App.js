import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from './components/ProtectedRoute';
import logo from './logo.svg';
import './App.css';
import './components/Navbar/Navbar';
import Navbar from './components/Navbar/Navbar';
import Slideshow from './components/Slideshow/Slideshow';
import Footer from './components/Footer/Footer';
import Login from './pages/Login/Login';
import Manage from './pages/Manage/Manage';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar/>
          <div className="container">
            <Switch>
              <Route exact path="/" component={Slideshow} />
              <Route exact path="/manage/login" component={Login} />
              <PrivateRoute exact path="/manage" component={Manage} />
            </Switch>
          </div>
          <Footer/>
        </div>  
      </Router>
    );
  }
}

export default App;
