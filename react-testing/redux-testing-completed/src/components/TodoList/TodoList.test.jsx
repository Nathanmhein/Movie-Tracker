
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../store';
import {addTodos, filterTodos, deleteTodos, toggleStatus, completeTodos} from '../../reducers/todosReducer';

import * as matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);

import TodoList from '.';

describe("TodoList component", () => { 

    afterEach(() => {
        cleanup()
    })

    it("Adds todo successfully", () => {
        store.dispatch(addTodos("todo 1"))
        store.dispatch(addTodos("todo 2"))
        store.dispatch(filterTodos())

        render(<Provider store={store}>
            <TodoList />
           </Provider>)

        const items = screen.getAllByRole("figure");
        expect(items.length).toBe(2);
    })

    it("Filters todo successfully", () => {
        store.dispatch(completeTodos({text: "todo 2"}))
        store.dispatch(toggleStatus("completed"))
        store.dispatch(filterTodos())

        render(<Provider store={store}>
            <TodoList />
           </Provider>)

        const items = screen.getAllByRole("figure");
        expect(items.length).toBe(1);
    })

    it("Deletes todo successfully", () => {
        store.dispatch(deleteTodos({text: "todo 1"}))
        store.dispatch(filterTodos())

        render(<Provider store={store}>
            <TodoList />
           </Provider>)

        const items = screen.getAllByRole("figure");
        expect(items.length).toBe(1); 
    })
});