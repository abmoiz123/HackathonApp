import reducer from './Reducer/Reducer';
// import { createStore, applyMiddleware } from 'redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const rootReducers = combineReducers({
    users: reducer
})

const configstore = () => createStore(rootReducers, {}, applyMiddleware(thunk))
// const configstore = createStore(reducer, {}, applyMiddleware(thunk))



export default configstore;