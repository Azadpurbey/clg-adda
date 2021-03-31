import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
  userLoginReducer,
  userRegisterReducer,
  emailOtpUserReducer,
  updateUserProfileReducer,
  userListReducer,
  addFollowUserReducer,
  addTipReducer,
  addLinkReducer,
  userDetailReducer,
  userTipLinkReducer,
} from './reducers/authReducer'

import {
  materialCreateReducer,
  materialDetailsReducer,
  materialUpdateReducer,
  materialListReducer,
  materialDeleteReducer,
} from './reducers/materialReducer'

import {
  profDetailReducer,
  profListReducer,
  profCreateReducer,
  profDeleteReducer,
  profUpdateReducer,
} from './reducers/profReducer'
import {
  aluminiDetailReducer,
  aluminiListReducer,
  aluminiCreateReducer,
  aluminiDeleteReducer,
  aluminiUpdateReducer,
} from './reducers/aluminiReducer'

const reducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  emailOtpUser: emailOtpUserReducer,
  updateUserProfile: updateUserProfileReducer,
  materialCreate: materialCreateReducer,
  materialDetails: materialDetailsReducer,
  materialUpdate: materialUpdateReducer,
  materialList: materialListReducer,
  profDetail: profDetailReducer,
  profList: profListReducer,
  aluminiDetail: aluminiDetailReducer,
  aluminiList: aluminiListReducer,
  aluminiCreate: aluminiCreateReducer,
  profCreate: profCreateReducer,
  profDelete: profDeleteReducer,
  profUpdate: profUpdateReducer,
  aluminiDelete: aluminiDeleteReducer,
  aluminiUpdate: aluminiUpdateReducer,
  materialDelete: materialDeleteReducer,
  userList: userListReducer,
  addFollowUser: addFollowUserReducer,
  addTip: addTipReducer,
  addLink: addLinkReducer,
  userDetail: userDetailReducer,
  userTipLink: userTipLinkReducer,
})

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
}

const middleware = [thunk]
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
