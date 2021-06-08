import React from 'react';
import { connect } from 'react-redux';
import {loginUser} from '../../../actions';
import LoginForm from './loginForm';
import Navigation from '../../navigation';
import Footer from '../../home/footer';
import './login.css'
 
class loginReduxForm extends React.Component{
    componentDidMount() {
        if(this.props.auth.isAuthenticated) {
            this.props.history.push('/admission');
        }
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.auth.isAuthenticated) {
            this.props.history.push('/admission')
        }
         
    }
    onSubmit=values=>{
        this.props.loginUser(values)
    }
    render(){
        return(
            <div>
                <Navigation/>
                <LoginForm onSubmit={this.onSubmit}/>
                <Footer/>
            </div>)
    }
}
const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors,
    msg:state.msg
});

export default connect(mapStateToProps,{loginUser})(loginReduxForm);