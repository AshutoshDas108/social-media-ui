import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import { authReducer } from "./Auth/auth.reducer";

const rootReducers = combineReducers({

    auth: authReducer

})

//this store is provided to the whole application
//this store can be accessed from anycomponent
export const store = legacy_createStore(rootReducers, applyMiddleware(thunk))
//first parameter contains all the reducers
//second parameter is the middleware thunk for asynchronous activity