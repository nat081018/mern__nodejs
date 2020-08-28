
import {combineReducers} from "redux"

import userReducer from "./user/user.reduceres"
import exerciseReduser from "./exercise/exercise.reducer"


import { persistReducer } from "redux-persist"
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user']
}

const  rootReducer = combineReducers({
    user: userReducer,
    exercise: exerciseReduser
})

export default  persistReducer(persistConfig, rootReducer)