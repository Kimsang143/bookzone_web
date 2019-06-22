import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import rootReducers from '../Redux/reducers/index.js'
// import Reactotron from '../../ReactotronConfig';

export default function configureStore(){
	let store = createStore(rootReducers,applyMiddleware(thunk)) 
	// let store = createStore(rootReducers) 
	// let store = Reactotron.createStore(rootReducers,applyMiddleware(thunk)) 
	return store
}