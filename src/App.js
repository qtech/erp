import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Auth/Login';
import Main from './components/layout/Main';
import { ProtectedRoute } from './components/Auth/ProtectedRoute';

class App extends Component { 
  render() {
    return (
      <BrowserRouter>
        <div className="App">        
          <Route exact path="/" component={Home}/>
          <Route path="/login" component={Login}/>
          <ProtectedRoute path="/admin" component={Main}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
