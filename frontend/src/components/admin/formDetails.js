import React, { Component, useEffect,useState} from 'react';
import {Route, Switch,Link, useParams,useRouteMatch} from 'react-router-dom';
import axios from 'axios'
import { closeForm,submitInfo,downloadForm} from '../../actions';
import {connect} from 'react-redux';


const FormDetails =(props) => {
  const user = {phoneNumber:props.auth.user.phoneNumber,info:{approved:true}}
 
   return(
      
     <div>
      {props.auth.user.phoneNumber}
       <button onClick={()=>{props.closeForm()}}>close</button> 
        {props.auth.user.approved?(<div>approved</div>):(<button onClick={()=>{props.submitInfo(user)}}>approve</button> )}
        <button onClick={()=>{props.downloadForm(user)}}>download</button>
     </div>)
}
const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors,
    msg:state.msg
});
export default connect(mapStateToProps, {closeForm,submitInfo,downloadForm})(FormDetails);