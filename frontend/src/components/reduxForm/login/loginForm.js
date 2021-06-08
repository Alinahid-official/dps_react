import axios from 'axios';
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { SubmissionError } from 'redux-form';

const validate =  values => {
 
 const errors = {}
   if (!values.phoneNumber) {
     errors.phoneNumber = 'Required'
   }
 if (!values.password) {
   errors.password = 'Required'
 }
 
 return errors
}

const asyncValidate= async values=>{
    
    const number = {phoneNumber:values.phoneNumber};
    const response=await axios.post('http://localhost:4000/auth/validatePhone', number)
    if(!response.data.user) {
      throw {phoneNumber : 'Phone number is not registered'}
    } 
     
  }

class LoginForm extends React.Component {
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
         (error &&<span class='span'>{error}</span>)}
       
     </div>
   </div>
   )
   
       }
    onSubmit= async values=>{
      const number = {phoneNumber:values.phoneNumber};
    const response=await axios.post('http://localhost:4000/auth/validatePhone', number)
    if(!response.data.user) {
      throw new SubmissionError( {phoneNumber : 'Phone number is not registered'})
    } else{
      const user = {phoneNumber:values.phoneNumber,password:values.password};
      const response=await axios.post('http://localhost:4000/auth/checkPassword', user)
      if(!response.data.password) {
          throw new SubmissionError({password : 'wrong password'})
      } 
      else{
          this.props.onSubmit(values)
      } 
    }
        

    }
 render(){
   return (
     
    <div className=' box align-center'>
         <form className='form' onSubmit={this.props.handleSubmit(this.onSubmit)}>
         <i class="fas fa-user-circle fa-4x"></i>
        
        <Field
          name="phoneNumber"
          type="text"
          component={this.renderField}
          label="Phone Number"
        />
        <Field name="password" type='text' component={this.renderField} label="Password" />
        
                      <button type='submit' className="ui primary button">
                          Sign In
                      </button>
                   
        
        
         
      </form>
    </div>
    
   )
 } 

}

export default reduxForm({
 form: 'syncValidation', // a unique identifier for this form
 validate, // <--- validation function given to redux-form
 asyncValidate,
 asyncBlurFields: ['phoneNumber']
})(LoginForm)
