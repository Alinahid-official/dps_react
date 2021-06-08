import React from 'react';

import Home from '../home';
import { Provider } from 'react-redux';
import store from '../../store';
import Admin from '../admin'
import Navigator from '../navigator';
import loginReduxForm from '../reduxForm/login';
import registerReduxForm from '../reduxForm/register';
import Admission from '../admission'
import Gallery from '../navigator/gallery'
import './grid.css';
import './App.css';
import { BrowserRouter, Route, Switch,Link } from 'react-router-dom';
import {setCurrentUser,logoutUser} from '../../actions';
import jwt_decode from 'jwt-decode';
 
if(localStorage.jwtToken) {
 
  const decoded = jwt_decode(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decoded.user));

  const currentTime = Date.now() / 1000;
  if(decoded.exp < currentTime) {
    store.dispatch(logoutUser);
     
  }
}

class App extends React.Component {
  render(){
    return(<Provider store={store}>
         <BrowserRouter >
 
      <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/navigate"   component={Navigator}/>
            <Route path='/auth/login'  component={loginReduxForm}/>
            <Route path='/auth/register'   component={registerReduxForm}/>
            <Route path='/admission'   component={Admission}/>
            <Route path='/admin'   component={Admin}/>
            <Route path='/gallery'   component={Gallery}/>
      </Switch>
      </BrowserRouter>
    </Provider>);
  }
}

export default App;
