import React from 'react';
import { Route,Switch,Redirect } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import Homepage from './pages/homepage/homepage.components';
import ShopPage from './pages/shoppage/shop.components';
import CheckoutPage from './pages/checkoutpage/checkoutpage.components';
import Header from './components/header/header.components';

import SigninandSiginupPage from './pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page.components';
import {connect} from 'react-redux';
import {checkUserSession} from './redux/user/user.actions'
import {selectCurrentUser} from './redux/user/user.selector';
import './pages/homepage/homepage.styles.scss';
import './App.css';

class  App extends React.Component {

  unsubcribeFromAuth = null

  componentDidMount() {
    const  {checkUserSession} = this.props;
    checkUserSession();
  }

  componentWillUnmount() {
    this.unsubcribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage}/>
          <Route path="/shops" component={ShopPage}/>
          <Route exact path="/checkout" component={CheckoutPage}/>
          <Route exact path="/signin" render={() => this.props.currentUser ?(<Redirect to='/'/>) :(<SigninandSiginupPage/>)}/>
        </Switch>          
      </div>
    );
  }
}
const mapStateToProp = createStructuredSelector({
  currentUser: selectCurrentUser
})
const mapDispatchToProps = dispatch =>({
  checkUserSession: () =>dispatch(checkUserSession()),
  
})

export default connect(mapStateToProp,mapDispatchToProps)(App);
