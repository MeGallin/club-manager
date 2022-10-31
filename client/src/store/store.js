import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  userRegistrationReducer,
  userLoginReducer,
  userForgotEmailReducer,
  userResetPasswordReducer,
  userAdminDetailsReducer,
  userUpdateAdminDetailsReducer,
} from './reducers/userReducers';
import {
  adminUsersDetailsReducer,
  adminIsAdminReducer,
  adminIsSuspendedReducer,
  adminIsCoachReducer,
  adminIsParentReducer,
  adminIsPlayerReducer,
  adminAllProfilesReducer,
  adminCreateProfileReducer,
  adminEditProfileReducer,
} from './reducers/adminReducers';
import {
  profileGetProfileReducer,
  profileCreateProfileReducer,
  profileEditProfileReducer,
  profileDeleteProfileReducer,
} from './reducers/profileReducers';

import {
  adminCreatePlayerReducer,
  adminGetPlayersReducer,
  adminDeletePlayerReducer,
} from './reducers/playerReducers';

//Initialise state to hold user info if logged in.
const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null;

const reducer = combineReducers({
  userRegistration: userRegistrationReducer,
  userLogin: userLoginReducer,
  userForgotEmail: userForgotEmailReducer,
  userResetPassword: userResetPasswordReducer,
  userAdminDetails: userAdminDetailsReducer,
  userUpdateAdminDetails: userUpdateAdminDetailsReducer,
  adminUsersDetails: adminUsersDetailsReducer,
  adminIsAdmin: adminIsAdminReducer,
  adminIsSuspended: adminIsSuspendedReducer,
  adminIsParentCoach: adminIsCoachReducer,
  adminIsParent: adminIsParentReducer,
  adminIsPlayer: adminIsPlayerReducer,
  adminAllProfiles: adminAllProfilesReducer,
  adminCreateProfile: adminCreateProfileReducer,
  adminEditProfile: adminEditProfileReducer,
  profileGetProfile: profileGetProfileReducer,
  profileCreateProfile: profileCreateProfileReducer,
  profileEditProfile: profileEditProfileReducer,
  profileDeleteProfile: profileDeleteProfileReducer,
  adminCreatePlayer: adminCreatePlayerReducer,
  adminGetPlayers: adminGetPlayersReducer,
  adminDeletePlayer: adminDeletePlayerReducer,
});

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};
const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware)),
);

export default store;
