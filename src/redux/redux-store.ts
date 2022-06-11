import {applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import {sidebarReducer} from "./sidebarReducer";
import {userReducer} from "./userReducer";
import {authReducer} from "./authReducer";
import {reducer as formReducer} from "redux-form"
import thunk from "redux-thunk";
import {appReducer} from "./appReducer";

export type ReducersType = typeof store

export const rootReducer = combineReducers({
   profilePage: profileReducer,
   dialogsPage: dialogsReducer,
   sidebarPage: sidebarReducer,
   usersPage: userReducer,
   auth: authReducer,
   form: formReducer,
   app: appReducer
});

export type RootReducerType = ReturnType<typeof rootReducer>

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store