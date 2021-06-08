import React, { Component} from 'react';
import axios from 'axios'
import {connect} from 'react-redux';
import {getFormDetails,closeForm} from '../../actions';

const UserList = props=>{
 
   let users =props.users;
  
    if(users==null){
        return(
            <div>No Forms</div>)
    }else{
        const list= users.map(user=>{
            const data={phoneNumber:user.phoneNumber}
            return(
                <li key={user._id}> {user.phoneNumber}<button onClick={()=>{props.viewDetails(data)}}>view</button></li>)
        })
        return(<div>{list}</div>)
    }
    
}
 

class AdmissionForms extends Component {
    constructor() {
        super();
        this.state = {
          users:null,
          authenticated:false
        };
      }
    componentDidMount() {
        axios.get('http://localhost:4000/formlist')
        .then(res=>{this.setState({users:res.data.users})})
        .catch(err=>{console.log(err)})
        
        
    }
    viewDetails=data=>{
      this.props.getFormDetails(data)
      this.setState({authenticated:true})
    }
    closeForm =()=>{
        this.props.closeForm()
        this.setState({authenticated:false})
    }
     
    render(){
      
 
        return(
            <div>
              
                <UserList users={this.state.users} viewDetails={this.viewDetails}/>
            </div>)
    }
}
const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors,
    msg:state.msg
});
export default connect(mapStateToProps,{getFormDetails,closeForm})(AdmissionForms);