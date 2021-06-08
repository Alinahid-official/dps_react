import { GET_ERRORS, SET_CURRENT_USER,GET_MSG, SIGN_OUT } from './types';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import history from '../history';
export const  sendOtp = (user)=>dispatch => {
    axios.post('http://localhost:4000/auth/sendOtp', user)
    .then(res=>{
        dispatch({
            type : GET_MSG,
            payload:res.data
        })
    })
    .catch(err => {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        });
    });
}
export const  verifyOtp = (user)=>dispatch => {
    axios.post('http://localhost:4000/auth/verifyOtp', user)
    .then(res=>{
        dispatch({
            type : GET_MSG,
            payload:res.data
        })
    })
    .catch(err => {
         
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        });
    });
}

export const loginUser = (user) => dispatch => {
    axios.post('http://localhost:4000/auth/signIn', user)
            .then(res => {
                const { token } = res.data;
                localStorage.setItem('jwtToken', token);
                const decoded = jwt_decode(token);
                dispatch(setCurrentUser(decoded.user));
            })
            .catch(err => {
                console.log(err)
                dispatch({
                    type: GET_ERRORS,
                    payload: err.response.data
                });
            });
}

export const setCurrentUser = decoded => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    }
}
export const logoutUser = () => dispatch => {
    localStorage.removeItem('jwtToken');
    dispatch({
        type: SIGN_OUT
    });
    history.push('/')
}
export const closeForm = () => dispatch => {
    
    dispatch({
        type: SIGN_OUT
    });
 
}
export const updateInfo=(user)=>dispatch=>{
    axios.post('http://localhost:4000/updateInfo', user)
    .then(res => {
        dispatch({
            type : GET_MSG,
            payload:res.data
        }) 
    })
    .catch(err => {
        
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        });
    });
}
export const getFormDetails =(user)=>dispatch=>{
    axios.post('http://localhost:4000/getUserInfo', user)
    .then(res => {
        if(res.status === 200){
            let userData = res.data;
            dispatch(setCurrentUser(userData))
           history.push('/admin/admissionForms') 
        }
        
    }).catch(err => {
        console.log(err)
    })
}
export const submitInfo=(user)=>dispatch=>{
    
       axios.post('http://localhost:4000/updateInfo',user )
      .then(response => {
        if (response.status==200){
          dispatch(setCurrentUser(response.data.data))
        }
      })
}
export const submitFileInfo=(user)=>dispatch=>{
    let formData = new FormData();
    formData.append("image",user.file);
    axios.post('http://localhost:4000/uploadImage',formData)
    .then(res =>{
      if(res.data.upload){
        
        user.data.url=res.data.url;
        axios.post('http://localhost:4000/updateFileInfo',user)
        .then(resp =>{
            if(resp.status==200){
            dispatch(setCurrentUser(resp.data.updated_user))
        }
    })
      }
    })
    .catch(error=>{console.log(error)})
}
export const downloadForm=(user)=>dispatch=>{
    
    axios.post('http://localhost:4000/downloadForm',user )
   .then(response => {
     if (response.status==200){
        window.open(response.data.url)
     }
   })
}
export const pay=(user)=>dispatch=>{
    axios.post('http://localhost:4000/payment',user)
    .then(res=>{
        console.log(res)
    })
}