import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from './components/ProtectedRoute';
import logo from './logo.svg';
import './App.css';
import './components/Navbar/Navbar';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';
import Login from './pages/Login/Login';
import Manage from './pages/Manage/Manage';
import Products from './pages/Products/Products';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar/>
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/manage/login" component={Login} />
              <Route exact path="/products" component={Products} />
              {/* <Route exact path="/products/:catalogNumber" component={Item} /> */}
              {/* <Route exact path="/about" component={About} /> */}
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
