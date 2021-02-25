import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {userLoginReducer,userRegisterReducer,emailOtpUserReducer,updateUserProfileReducer} from './reducers/authReducer';



const reducer=combineReducers({
     userLogin:userLoginReducer,
     userRegister:userRegisterReducer,
     emailOtpUser:emailOtpUserReducer,
     updateUserProfile:updateUserProfileReducer

})

const userInfoFromStorage=localStorage.getItem('userInfo')?JSON.parse(localStorage.getItem('userInfo')):null

const initialState={
     userLogin:{userInfo:userInfoFromStorage}
}

const middleware=[thunk];
const store=createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middleware)))

export default store;