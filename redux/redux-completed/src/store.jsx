import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import todosReducer from "./reducers/todosReducer";
import {composeWithDevTools} from '@redux-devtools/extension';
import {thunk} from "redux-thunk"

const composedFunctions = composeWithDevTools(...[applyMiddleware(thunk)]);

const store = createStore(todosReducer, composedFunctions);

export default store;