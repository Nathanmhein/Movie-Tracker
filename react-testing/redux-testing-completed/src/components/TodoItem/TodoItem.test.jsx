import React from 'react';
import { describe, it, expect, afterEach } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../store';

import * as matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);

import TodoItem from '.';

describe("TodoItem component", () => {
    afterEach(() => {
        cleanup();
    })

    it("Displays a span with appropriate text & classname when `todo.completed` is false", () => {
        render(<Provider store={store}><TodoItem todo={{text: "todo", completed: false}}/></Provider>);

        const elem = screen.getByRole("figure");
        expect(elem).toBeInTheDocument();
        expect(elem.className).toContain("todo-item")
        expect(elem.textContent).toContain("todo")
    })

    it("Displays a span with appropriate text & classname when `todo.completed` is true", () => {
        render(<Provider store={store}><TodoItem todo={{text: "todo", completed: true}}/></Provider>);
        const elem = screen.getByRole("figure");
        expect(elem).toBeInTheDocument();
        expect(elem.className).toContain("todo-item completed")
        expect(elem.textContent).toContain("todo")
    })
});