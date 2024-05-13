
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { screen, render, cleanup, act } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../store';
import {completeTodos, filterTodos} from '../../reducers/todosReducer';

import * as matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);

import TodoItem from '.';

describe("TodoItem component", () => { 
 
    // beforeEach(() => {
    //     render(<Provider store={store}><TodoItem todo={todo} /></Provider>);
    // });

    afterEach(() => {
        cleanup()
    })

    it("Displays a span with appropriate text & className", () => {
        render(<Provider store={store}><TodoItem todo={{text: "todo", completed: false}} /></Provider>);

        const elem = screen.getByRole("figure");
        expect(elem).toBeInTheDocument();
        expect(elem.textContent).toBe("todo");
        expect(elem.className).toContain("todo-item")
    })

    it("Displays a span with appropriate className after event", async () => {
        render(<Provider store={store}><TodoItem todo={{text: "todo", completed: true}} /></Provider>);

        const elem = screen.getByRole("figure");
        expect(elem).toBeInTheDocument();
        expect(elem.className).toBe("todo-item completed")
    })

    // it("Displays a span with appropriate className after event", async () => {
    //     const todo = {text: "todo", completed: false};

    //     store.dispatch(completeTodos({text: 'todo', completed: true}))
    //     store.dispatch(filterTodos())

    //     render(<Provider store={store}><TodoItem todo={todo}/></Provider>);

    //     console.log(todo)
    //     const elem = screen.getByRole("figure");
    //     expect(elem).toBeInTheDocument();
    //     expect(elem.className).toBe("todo-item completed")
    // })

});