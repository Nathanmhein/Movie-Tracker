
import React from 'react';
import { describe, it, expect, afterEach } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from './store';
import {addTodo, deleteTodo} from './reducers/todosReducer';

import * as matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);

import App from './App';

describe("App component", () => { 
    afterEach(() => {
        cleanup()
    })
    
    it("Adds todo successfully", () => {
        store.dispatch(addTodo("todo 1"))
        store.dispatch(addTodo("todo 2"))

        render(<Provider store={store}>
            <App />
           </Provider>)

        const items = screen.getAllByRole("figure");
        expect(items.length).toBe(2);
    })

    it("Deletes todo successfully", () => {
        store.dispatch(deleteTodo({text: "todo 1"}))

        render(<Provider store={store}>
            <App />
           </Provider>)

        const items = screen.getAllByRole("figure");
        expect(items.length).toBe(1);
    })
});

// describe("App component", () => { 
//     afterEach(() => {
//         cleanup()
//     })
//     it("Adds todo successfully", () => {
//         store.dispatch(addTodo("todo 1"))
//         store.dispatch(addTodo("todo 2"))

//         // render(<Provider store={store}>
//         //     <TodoList filteredTodos={[]} />
//         //    </Provider>)

//         render(<Provider store={store}><App /></Provider>)

//         const items = screen.getAllByRole("figure");
//         expect(items.length).toBe(2);
//     })

//     it("Deletes todo successfully", () => {
//         store.dispatch(deleteTodo({text: "todo 1"}))

//         // render(<Provider store={store}>
//         //     <TodoList filteredTodos={[]} />
//         //    </Provider>)

//         render(<Provider store={store}><App /></Provider>)

//         const items = screen.getAllByRole("figure");
//         console.log(items)
//         expect(items.length).toBe(1);
//     })
// });

// describe("TodoList component", () => { 

//     afterEach(() => {
//         cleanup()
//     })

//     it("Adds todo successfully", () => {
//         store.dispatch(addTodo("todo 1"))
//         store.dispatch(addTodo("todo 2"))

//         render(<Provider store={store}>
//             <TodoList />
//            </Provider>)

//         // render(<Provider store={store}><App /></Provider>)

//         const items = screen.getAllByRole("figure");
//         expect(items.length).toBe(2);
//     })
// });