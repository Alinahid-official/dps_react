import {combineReducers} from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import { reducer as formReducer } from 'redux-form';
import msgReducer from './msgReducer';

export default combineReducers({
    auth: authReducer,
    form: formReducer,
    errors: errorReducer,
    msg:msgReducer
})