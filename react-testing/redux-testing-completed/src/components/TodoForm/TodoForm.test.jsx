
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { screen, render, cleanup, act } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../store';
import {setInput, toggleStatus, filterTodos} from '../../reducers/todosReducer';

import * as matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);

import TodoForm from '.';

describe("TodoForm component", () => { 
    afterEach(() => {
        cleanup()
    })

    it("Displays brewery cards when the data is stored in state", () => {
        store.dispatch(setInput("todo 1"))

        render(<Provider store={store}>
            <TodoForm />
           </Provider>)

        const input = screen.getByRole("input");
        expect(input.value).toBe("todo 1"); 
    })

    it("Displays brewery cards when the data is stored in state", () => {
        store.dispatch(setInput(""))

        render(<Provider store={store}>
            <TodoForm />
           </Provider>)

        const input = screen.getByRole("input");
        expect(input.value).toBe(""); 
    })

    // it("Displays brewery cards when the data is stored in state", async () => {
    //     store.dispatch(toggleStatus("completed"))

    //     render(<Provider store={store}>
    //         <TodoForm />
    //     </Provider>)

    //     const select = screen.getByRole("select")
    //     console.log(select)
    //     expect(select.value).toBe("completed"); 
        
    // })
});