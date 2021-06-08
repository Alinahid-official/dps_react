import React, { Component } from 'react';
import { connect } from 'react-redux';
import {sendOtp,verifyOtp} from '../../../actions';
import RegistrationForm from './registerForm';
import Navigation from '../../navigation';
import Footer from '../../home/footer';

class registerReduxForm extends Component {
    componentWillReceiveProps(nextProps) {
        if(nextProps.msg.verified) {
            this.props.history.push('/login')
        }
         
    }

    componentDidMount() {
        if(this.props.auth.isAuthenticated) {
            this.props.history.push('/');
        }
    }
    onSubmit = values=>{
         if(this.props.msg.message){
            const user = {
                phoneNumber:values.phoneNumber,
                password:values.password,
                code:values.code
                }
                this.props.verifyOtp(user); 
         }
         else{
            const user = {
                phoneNumber:values.phoneNumber,
                }
            this.props.sendOtp(user);
         }
         
       
        
    }
    
    render(){
        return(
            <div>
                <Navigation/>
                <RegistrationForm msg={this.props.msg.message?'msg':''} onSubmit={this.onSubmit}/>
                <Footer/>
            </div>)
    }
}
const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors,
    msg:state.msg
});

export default connect(mapStateToProps,{sendOtp,verifyOtp})(registerReduxForm);