import {SET_CURRENT_USER,SIGN_OUT,UPDATE_USER} from '../actions/types'; 

const initialState = {
    isAuthenticated:false,
    user:{}
}

export default (state = initialState,action)=>{
    switch(action.type){
        case SET_CURRENT_USER:
            return{
                ...state,
                isAuthenticated:true,
                user:action.payload,
            }
        case SIGN_OUT:
            return{
                ...state,
                isAuthenticated:false,
                user:null
            }
        
        default:
            return state;
    }
}