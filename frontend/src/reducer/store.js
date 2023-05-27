import reducer from "./reducer"
import { createStore, combineReducers } from 'redux'

// const rootReducer = combineReducers({auth:reducer})

const store = createStore(reducer)


export {store};