import reducer from "./reducer"
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

// const rootReducer = combineReducers({auth:reducer})

const store = createStore(reducer,applyMiddleware(thunk))


export {store};