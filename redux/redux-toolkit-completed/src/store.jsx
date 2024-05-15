import todosReducer from "./reducers/todosReducer";
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({reducer: todosReducer});

export default store;