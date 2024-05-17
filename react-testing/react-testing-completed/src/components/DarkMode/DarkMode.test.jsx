import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';
import {DarkModeProvider} from '../../context/DarkMode';
import userEvent from '@testing-library/user-event';

import matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);

import DarkMode from '.';

describe("DarkMode component", () => {

    beforeEach(() => {
        render(<DarkModeProvider><DarkMode /></DarkModeProvider>);
    });

    afterEach(() => {
        cleanup();
    })

    it("Toggles the darkmode when the button is clicked", async () => {
        const container = screen.getByRole("figure");
        const button = screen.getByRole("button");

        expect(container.className).toEqual("Container Container-light");
        await userEvent.click(button);
        expect(container.className).toEqual("Container Container-dark");
    })
});
