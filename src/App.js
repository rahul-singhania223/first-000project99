import React from 'react';
import './App.css'
import HomePage from './HomePage';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import ProductPage from './ProductPage';
import CartPage from './CartPage'

function App(props) {
  return (
    <Router>
      <div>
        <Switch>
          <Route path='/cart'><CartPage /></Route>
          <Route path='/product'><ProductPage /></Route>
          <Route path='/'><HomePage /></Route>
        </Switch>
        
      </div>
    </Router>
    
  );
}

export default App;