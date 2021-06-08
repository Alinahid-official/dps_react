import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import {connect} from 'react-redux';
import axios from 'axios';
import history from '../../history'
import {submitFileInfo} from '../../actions';
 
class FileForm extends Component {
  constructor() {
    super();
    this.state = {
      selectedFile:null,
      fileName:null
    };
  }
  onFormSubmit =()=> {
    const user ={file:this.state.selectedFile,phoneNumber:this.props.auth.user.phoneNumber,data:{name:this.state.fileName}}
  
    this.props.submitFileInfo(user)
  
  };
  renderInput = ({ input, type, myprop }) => {
    const { mime } = this.props;
    return (
      <div>
        <input
          name={input.name}
          type={type}
          accept={mime}
          onChange={event => this.handleChange(event,myprop)}
        />
      </div>
    );
  };

  handleChange = (event,myprop) => {
     event.preventDefault();
     this.setState({ selectedFile: event.target.files[0] });
     this.setState({ fileName:myprop })
    
  };

  render() {
    const { handleSubmit } = this.props;

    return (
      
      <div>
        <h2>File upload to server using redux-form in React</h2>
        <hr />
        {!this.props.auth.user.father_sign?(<div>
          
          <form onSubmit={handleSubmit(this.onFormSubmit)}>
          <table>
            <tr>
              <td>Select File :</td>
            </tr>
            <tr>
              <td>
                <Field
                  name="image"
                  type="file"
                  component={this.renderInput}
                  myprop='father_sign'
                />
              </td>
            </tr>
            <tr>
              <td>
                <button type="submit">Submit</button>
              </td>
            </tr>
          </table>
        </form>
      </div>):<img src={this.props.auth.user.father_sign}/>}
        
       
      </div>
    );
  }
}
const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors,
    msg:state.msg
  });

export default reduxForm({
  form: "myfileupload"
})(connect(mapStateToProps,{submitFileInfo})(FileForm));