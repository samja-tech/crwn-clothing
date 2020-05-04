import React from 'react';
import { Route,Switch } from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage/homepage.components';
import ShopPage from './pages/shoppage/shop.components';
import Header from './components/header/header.components';
import SigninandSiginupPage from './pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page.components';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
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
    this.unsubcribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
        })
      }
        
        this.setState({currentUser:userAuth});
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
