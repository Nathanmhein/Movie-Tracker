import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import * as matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);

import Clicker from '.';

describe("Clicker component", () => {

    beforeEach(() => {
        render(<Clicker />);
    });

    afterEach(() => {
        cleanup();
    })
    
    it("Displays a heading with appropriate text", () => {
        const elem = screen.getByRole("heading");
        expect(elem).toBeInTheDocument();
        expect(elem.textContent).toBe("Clicker!");
    })

    it("Increments the display when the button is clicked", async () => {
        const display = screen.getByRole("figure");
        const button = screen.getByRole("button");

        expect(display.textContent).toEqual("0");
        await userEvent.click(button);
        expect(display.textContent).toEqual("1");
    })
});