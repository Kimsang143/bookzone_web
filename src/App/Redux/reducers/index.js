import {combineReducers} from 'redux';
import productBook from './productBook';
import contactApp from './contactApp';
const rootReducers= combineReducers({
 	productBook,
 	contactApp
});
export default rootReducers;