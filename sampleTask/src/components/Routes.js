import {BrowserRouter as Router,Route} from 'react-router-dom';
import React from 'react';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Register from './components/Register';

const Routes=()=> {
      return (
        <div className="App">
          <header className="App-header">
            <Router>
              <Route path="/" exact component={Login}/>
              <Route path="/dashboard" component={Dashboard}/> 
              <Route path="/register" component={Register}/>
            </Router>
           </header>
        </div>
      );
}

export default Routes;