import {legacy_createStore as createStore ,combineReducers,applyMiddleware } from 'redux'

import thunk from 'redux-thunk'
import { composeWithDevTools} from 'redux-devtools-extension'
import { userLoginReducer, userRegisterReducer } from './reduces/userReducers';
import { noteListReducer } from './reduces/notesReducers';
const reducer = combineReducers({
    userLogin: userLoginReducer,
    userRegister:userRegisterReducer,
    noteList: noteListReducer


})
const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};


const middleware = [thunk];
const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;