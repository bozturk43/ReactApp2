import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import './index.css';
import App from './App';
import Admin from './Admin';

const Routing=()=>{

  return(
    <Router>
      <Switch>
        <Route exact path='/admin' component={Admin}></Route>
        <Route exact path='/' component={App}></Route>
      </Switch>
    </Router>
  )

}

ReactDOM.render(
  <React.StrictMode>
    <Routing></Routing>
  </React.StrictMode>,
  document.getElementById('root')
);

