import React from 'react';
import { Route,Switch } from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage/homepage.components';
import ShopPage from './pages/shoppage/shop.components';
import './pages/homepage/homepage.styles.scss';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage}/>
        <Route path="/hats" component={ShopPage}/>
      </Switch>
      
    </div>
  );
}

export default App;
