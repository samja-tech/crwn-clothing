import React from 'react';
import { Route,Switch } from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage/homepage.components';
import ShopPage from './pages/shoppage/shop.components';
import Header from './components/header/header.components';
import SigninandSiginupPage from './pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page.components';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user.actions'
import './pages/homepage/homepage.styles.scss';

class  App extends React.Component {

  unsubcribeFromAuth = null

  componentDidMount() {
    const  {setCurrentUser } = this.props;
    this.unsubcribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
        })
      }
        
      setCurrentUser({userAuth});
    })
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
          <Route path="/signin" component={SigninandSiginupPage}/>
        </Switch>          
      </div>
    );
  }
}
const mapDispatchToProps = disptach =>({
  setCurrentUser: user =>disptach(setCurrentUser(user))
})

export default connect(null,mapDispatchToProps)(App);
