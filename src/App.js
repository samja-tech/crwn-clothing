import React from 'react';
import { Route,Switch } from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage/homepage.components';
import ShopPage from './pages/shoppage/shop.components';
import Header from './components/header/header.components';
import SigninandSiginupPage from './pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page.components';
import { auth } from './firebase/firebase.utils';
import './pages/homepage/homepage.styles.scss';

class  App extends React.Component {

  constructor() {
    super();

    this.state = {
      currentUser : null,
    }    
  }

  unsubcribeFromAuth = null

  componentDidMount() {
    this.unsubcribeFromAuth = auth.onAuthStateChanged(user =>
      {
        this.setState({currentUser:user});
        
      })
  }

  componentWillUnmount() {
    this.unsubcribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path="/" component={Homepage}/>
          <Route path="/shops" component={ShopPage}/>
          <Route path="/signin" component={SigninandSiginupPage}/>
        </Switch>          
      </div>
    );
  }
}

export default App;
