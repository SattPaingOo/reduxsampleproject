import signinreduce from './SignInReducer';
import {combineReducers} from 'redux';

const reducers = combineReducers({
    'signin' : signinreduce
})

export default reducers;