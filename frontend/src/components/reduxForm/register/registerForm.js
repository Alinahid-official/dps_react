 import axios from 'axios';
 import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {Link } from 'react-router-dom';

const validate =  values => {
  
  const errors = {}
    if (!values.phoneNumber) {
      errors.phoneNumber = 'Required'
    }
  if (!values.password) {
    errors.password = 'Required'
  }
  if (!values.confirmPassword) {
      errors.confirmPassword = 'Required'
    }
    if (values.confirmPassword!==values.password) {
      errors.confirmPassword = 'Password Dont matches'
    }
  return errors
}
const asyncValidate= async values=>{
  const number = {phoneNumber:values.phoneNumber};
  const response=await axios.post('http://localhost:4000/auth/validatePhone', number)
  if(response.data.user) {
    throw {phoneNumber : 'already exist'}
  } 
   
}
 
 
class RegistrationForm extends React.Component {
  renderField ({
    input,
    label,
    type,
    meta: { touched, error, asyncValidating }
  }){
   const className = `input ${error && touched ? 'error' : ''}`;
   const icon = `fas fa-exclamation-circle ${error && touched ? 'show1' : 'hide1'}`;
   return(
    
    <div className='field' >
      <div className={asyncValidating ? 'async-validating' : ''}>
        <div className='input-box'>
        <input id='input' className={className} {...input} type={type} required />
        <label htmlFor='input' className='label' alt={label} placeholder={label}></label>
        </div><i className={icon}></i><br></br>
        {touched &&
          (error &&<span class='span' >{error}</span>)}
        
      </div>
    </div>
    )
    
        }
  render(){
    return (
      <form className='form align-center mg-tb-50' onSubmit={this.props.handleSubmit}>
        <i class="fas fa-user-circle fa-4x"></i>
        <Field
          name="phoneNumber"
          type="text"
          component={this.renderField}
          label="Phone Number"
        />
        <Field name="password" component={this.renderField} label="Password" />
        <Field name="confirmPassword"  component={this.renderField} label="Confirm Password" />
        {this.props.msg?(
                      <div><div className="form-group">
                      <Field
                      name="code"
                      component={this.renderField}
                      label="enter otp"
                    />
                     <div className="form-group">
                      <button type='submit' className="btn btn-primary">
                          Verify and register
                      </button>
                  </div>
                  </div></div>):(
                      <div className="form-group">
                      <button type='submit' className="ui primary button">
                          Send otp
                      </button>
                  </div>
                      )
  
                  }
                  <div>If Already Registered <Link to='/auth/login'>Click Here</Link> </div>
         
      </form>
    )
  } 
 
}

export default reduxForm({
  form: 'syncValidation', // a unique identifier for this form
  validate, // <--- validation function given to redux-form
  asyncValidate,
  asyncBlurFields: ['phoneNumber']
})(RegistrationForm)
