import React from 'react'
import Navigation from '../navigation/index';
import Footer from '../home/footer';
import {connect} from 'react-redux';
import {logoutUser} from '../../actions';
import FileForm from './fileForm';
import Payment from './payment'
import {
    Switch,
    Route,
    Link,
    
  } from "react-router-dom";
import GeneralInfoForm from './generalInfoForm'

class Admission extends React.Component{
    componentDidMount(){
      if(!this.props.auth){
        this.props.history.push('/auth/login')
      }
    }
    click(){
        this.props.logoutUser()
    }
    render(){
        const { url } = this.props.match;
        return(
            <div>
               <Navigation/>
             <div class='mg-tb-50 align-center' >
                <h1 class='mg-tb-50 color-y'> Admission</h1>
                <div>
      
      <ul>
        <li>
          <Link to={`${url}/generalInfo`}>general info</Link>
        </li>
        <li>
          <Link to={`${url}/files`}>files</Link>
        </li>
        <li>
          <Link to={`${url}/payment`}>Payments</Link>
        </li>
      </ul>

      <Switch>
      <Route exact path={`${url}`} >
          <h1>selecta link above</h1>
        </Route> 
        <Route path={`${url}/generalInfo`} >
          <GeneralInfoForm />
        </Route>
        <Route path={`${url}/files`} >
          <FileForm />
        </Route>
        <Route path={`${url}/payment`} >
          <Payment />
        </Route>
        
      </Switch>
    </div>
                 <a href="#"class="btn btn_trans_green" onClick={this.click.bind(this)} >Logout</a>
                 </div> 
            <Footer/>
            </div>
            
            )
    }
}
const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors,
    msg:state.msg
});
export default connect(mapStateToProps,{logoutUser})(Admission);