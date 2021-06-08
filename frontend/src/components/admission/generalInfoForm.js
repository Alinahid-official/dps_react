import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {submitInfo,setCurrentUser} from '../../actions'
import axios from 'axios';
import { connect } from 'react-redux'
import './admissionForm.css'
const validate =  values => {
 
 const errors = {}
   if (!values.name) {
     errors.name = 'Required'
   }
   if (!values.pic) {
    errors.pic = 'Required'
  }
 
 
 return errors
}
 

class GeneralInfoForm extends React.Component {
  
  constructor() {
    super();
    this.state = {
     sinfo:false
    };
  }
 componentDidMount(){
   if(this.props.auth.user.sinfo){
     this.setState({sinfo:true})
   }
 }
  renderClassSelector({ input,  meta: { touched, error } }){
    const classes=['1','2','3','4','5','6','7','8','9']
    return(
      <div>
      <select {...input}>
        <option value="">select one...</option>
        {classes.map(val => (
          <option value={val} key={val}>
            {val}
          </option>
        ))}
      </select>
      {touched && error && <span>{error}</span>}
    </div>
    )
  }
    
  renderGenderSelector({ input,  meta: { touched, error } }){
    const gender=['male','female','othes']
    return(
      <div>
      <select {...input}>
        <option value="">select one...</option>
        {gender.map(val => (
          <option value={val} key={val}>
            {val}
          </option>
        ))}
      </select>
      {touched && error && <span>{error}</span>}
    </div>
    )
  }
    
 
  

  renderDob ({
  
    input,
    label,
    type,
    meta: { touched, error, asyncValidating }
  }){
   const className = `  ${error && touched ? 'error' : ''}`;
   const icon = `fas fa-exclamation-circle ${error && touched ? 'show1' : 'hide1'}`;
   return(
    
    <div className='field' >
      <div className={asyncValidating ? 'async-validating' : ''}>
        <div className='input-box'>
        <input    id='input' className={className} {...input} type={type} required />
        <label htmlFor='input' className='label' alt={label} placeholder={label}></label>
        </div><i className={icon}></i><br></br>
        {touched &&
          (error &&<span class='span'>{error}</span>)}
        
      </div>
    </div>
    )
    
        }
 renderField ({
  
   input,
   label,
   type,
   meta: { touched, error, asyncValidating }
 }){
  const className = ` input ${error && touched ? 'error' : ''}`;
  const icon = `fas fa-exclamation-circle ${error && touched ? 'show1' : 'hide1'}`;
  return(
   
   <div className='field' >
     <div className={asyncValidating ? 'async-validating' : ''}>
       <div className='input-box'>
       <input    id='input' className={className} {...input} type={type}  />
       <label htmlFor='input' className='label' alt={label} placeholder={label}></label>
       </div><i className={icon}></i><br></br>
       {touched &&
         (error &&<span class='span'>{error}</span>)}
       
     </div>
   </div>
   )
   
       }
       
    onSubmit=   values=>{
      const user ={phoneNumber:this.props.auth.user.phoneNumber,info:values}
      this.props.submitInfo(user)
    }
    
 render(){
  const category = ['GEN', 'OBC', 'SC', 'ST']
 
   return (
  
    <div className='admission_from'>
      {this.state.sinfo?(<div>form Submitted</div>):(
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <div class='row '>
          <div class='col span-1-of-3'>
             <label> Class</label>
             <Field name="class" component={this.renderClassSelector}   />
          </div>
          <div class='col span-1-of-3'>
             <Field
               name="name"
               type="text"
               component={this.renderField}
               label="Name"
         
               />
          </div>
          <div class='col span-1-of-3'>
             <Field
               name="dob"
               type="date"
               component={this.renderDob}
           
         
               />
          </div>
        </div>
        <div class='row '>
        <div class='col span-1-of-3'>
             <Field
               name="nationality"
               type="text"
               component={this.renderField}
               label="Nationaliy"
         
               />
          </div>
          <div class='col span-1-of-3'>
             <Field
               name="religion"
               type="text"
               component={this.renderField}
               label="Religion"
         
               />
          </div>
          <div class='col span-1-of-3'>
          <label> gender</label>
             <Field name="gender" component={this.renderGenderSelector}   />
          </div>
        </div>
        <div class='row '>
        <div class='col span-1-of-3'>
             <Field
               name="father_name"
               type="text"
               component={this.renderField}
               label="father's Name"
         
               />
          </div>
          <div class='col span-1-of-3'>
             <Field
               name="father_occupation"
               type="text"
               component={this.renderField}
               label="father's Occupation"
         
               />
          </div>
          <div class='col span-1-of-3'>
             <Field
               name="father_designation"
               type="text"
               component={this.renderField}
               label="Designation"
         
               />
          </div>
        </div>
        <div class='row '>
        <div class='col span-1-of-3'>
             <Field
               name="father_annaualIncome"
               type="text"
               component={this.renderField}
               label="father's Annual Income"
         
               />
          </div>
          <div class='col span-1-of-3'>
             <Field
               name="father_phnumber"
               type="text"
               component={this.renderField}
               label="father's Phoone Number"
         
               />
          </div>
          <div class='col span-1-of-3'>
             <Field
               name="father_academicQualification"
               type="text"
               component={this.renderField}
               label="Academic Qualification"
         
               />
          </div>
        </div>
        <div class='row '>
        <div class='col span-3-of-3'>
             <Field
               name="father_organisationalAdress"
               type="text"
               component={this.renderField}
               label="father's Organisation Adress"
         
               />
          </div>
          <div class='col span-3-of-3'>
             <Field
               name="father_residentialAdress"
               type="text"
               component={this.renderField}
               label="Residential Address"
         
               />
          </div>
          
        </div>
        <div class='row '>
        <div class='col span-1-of-3'>
             <Field
               name="mother_name"
               type="text"
               component={this.renderField}
               label="mother's Name"
         
               />
          </div>
          <div class='col span-1-of-3'>
             <Field
               name="mother_occupation"
               type="text"
               component={this.renderField}
               label="mother's Occupation"
         
               />
          </div>
          <div class='col span-1-of-3'>
             <Field
               name="mother_designation"
               type="text"
               component={this.renderField}
               label="Designation"
         
               />
          </div>
        </div>
        <div class='row '>
        <div class='col span-1-of-3'>
             <Field
               name="mother_annaualIncome"
               type="text"
               component={this.renderField}
               label="mother's Annual Income"
         
               />
          </div>
          <div class='col span-1-of-3'>
             <Field
               name="mother_phnumber"
               type="text"
               component={this.renderField}
               label="mother's Phoone Number"
         
               />
          </div>
          <div class='col span-1-of-3'>
             <Field
               name="mother_academicQualification"
               type="text"
               component={this.renderField}
               label="Academic Qualification"
         
               />
          </div>
        </div>
        <div class='row '>
        <div class='col span-3-of-3'>
             <Field
               name="mother_organisationalAdress"
               type="text"
               component={this.renderField}
               label="mother's Organisation Adress"
         
               />
          </div>
       </div>
       <div class='row '>
        <div class='col span-1-of-3'>
             <Field
               name="home_town"
               type="text"
               component={this.renderField}
               label="Home Town"
         
               />
          </div>
          <div class='col span-1-of-3'>
             <Field
               name="State"
               type="text"
               component={this.renderField}
               label="State"
         
               />
          </div>
          <div class='col span-1-of-3'>
             <Field
               name="country"
               type="text"
               component={this.renderField}
               label="Country"
         
               />
          </div>
        </div>
        <div class='row '>
        <div class='col span-3-of-3'>
             <Field
               name="permanent_address"
               type="text"
               component={this.renderField}
               label="Permanent Address"
         
               />
          </div>
       </div>
       <div class='row '>
        <div class='col span-3-of-3'>
             <Field
               name="temporary_address"
               type="text"
               component={this.renderField}
               label="Current Address"
         
               />
          </div>
       </div>
       <div class='row '>
        <div class='col span-1-of-4'>
             <Field
               name="child_one"
               type="text"
               component={this.renderField}
               label="Child Name"
         
               />
          </div>
          <div class='col span-1-of-4'>
             <Field
               name="admsn_one"
               type="text"
               component={this.renderField}
               label="Admission No"
         
               />
          </div>
          <div class='col span-1-of-4'>
             <Field
               name="class_one"
               type="text"
               component={this.renderField}
               label="Class/Sec"
         
               />
          </div>
          <div class='col span-1-of-4'>
             <Field
               name="remarks_one"
               type="text"
               component={this.renderField}
               label="Remarks"
         
               />
          </div>
        </div>
        <div class='row '>
        <div class='col span-1-of-4'>
             <Field
               name="child_two"
               type="text"
               component={this.renderField}
               label="Child Name"
         
               />
          </div>
          <div class='col span-1-of-4'>
             <Field
               name="admsn_two"
               type="text"
               component={this.renderField}
               label="Admission No"
         
               />
          </div>
          <div class='col span-1-of-4'>
             <Field
               name="class_two"
               type="text"
               component={this.renderField}
               label="Class/Sec"
         
               />
          </div>
          <div class='col span-1-of-4'>
             <Field
               name="remarks_two"
               type="text"
               component={this.renderField}
               label="Remarks"
         
               />
          </div>
        </div>
        <div class='row '>
        <div class='col span-3-of-3'>
             <Field
               name="staff"
               type="text"
               component={this.renderField}
               label="Staff Child Info"
         
               />
          </div>
       </div>
       <div class='row '>
        <div class='col span-3-of-3'>
             <Field
               name="previous_school"
               type="text"
               component={this.renderField}
               label="Name Of the Previous School"
         
               />
          </div>
       </div>
       <div class='row '>
        <div class='col span-3-of-3'>
             <Field
               name="previous_class"
               type="text"
               component={this.renderField}
               label="Class in which he / she was studying in the last school"
         
               />
          </div>
       </div>
       <div class='row '>
        <div class='col span-3-of-3'>
             <Field
               name="previous_position"
               type="text"
               component={this.renderField}
               label="Position obtained in the last examination in the previous school"
         
               />
          </div>
       </div>
       <div class='row '>
        <div class='col span-3-of-3'>
             <Field
               name="previous_medium"
               type="text"
               component={this.renderField}
               label=" Medium of instruction in previous school (English / Hindi)"
         
               />
          </div>
       </div>
       <div class='row '>
        <div class='col span-3-of-3'>
             <Field
               name="profiency"
               type="text"
               component={this.renderField}
               label=" Profciency in games / co-curricular / outstanding achievements (if any)."
         
               />
          </div>
       </div>
        <button type='submit' className="ui primary button">Submit</button>
     </form>

      )}
             </div>
    
   )
 } 

}
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors,
  msg:state.msg
});
export default reduxForm({
 form: 'syncValidation', // a unique identifier for this form
 validate, // <--- validation function given to redux-form
  
})(connect(mapStateToProps,{submitInfo,setCurrentUser})(GeneralInfoForm))
