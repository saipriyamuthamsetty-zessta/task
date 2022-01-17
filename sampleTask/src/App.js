import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Register from './components/Register';
import './App.css';
import React from 'react';
//import Routes from './components/Routes';
import {BrowserRouter as Router,Route} from 'react-router-dom';

class App extends React.Component {

  render(){
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
}

export default App;
