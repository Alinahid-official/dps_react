import React, { Component} from 'react';
import AdmissionForms from './admissionForms';
import AdminGallery from './adminGallery';
import AdminNotice from './adminNotice';
import {connect} from 'react-redux';
 import FormDetails from './formDetails'
 import { closeForm} from '../../actions';
import { BrowserRouter, Route, Switch,Link } from 'react-router-dom';


class Admin extends Component {
    render(){
        const{url,path}=this.props.match;
        return(
            <div>
                <ul>
        <li>
          <Link to={`${url}/admissionForms`}>admission forms</Link>
        </li>
        <li>
          <Link to={`${url}/adminNotice`}>Notices</Link>
        </li>
        <li>
          <Link to={`${url}/adminPayment`}>payment</Link>
        </li>
        <li>
          <Link to={`${url}/adminGallery`}>Gallery</Link>
        </li>
      </ul>

      <Switch>
      <Route exact path={`${path}`} >
          <h1>selecta link above</h1>
        </Route> 
        <Route path={`${path}/admissionForms`} component={!this.props.auth.isAuthenticated?AdmissionForms:FormDetails}></Route>
        <Route path={`${path}/adminNotice`} component={AdminNotice} ></Route>
        <Route path={`${path}/adminGallery`} component={AdminGallery} ></Route>
        
      </Switch>
            </div>)
    }
}
const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors,
    msg:state.msg
});
export default connect(mapStateToProps)(Admin);