import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { BrowserRouter } from 'react-router-dom';

import * as matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);

import PageWrapper from '.';


describe("PageWrapper component", () => {

    beforeEach(() => {
        render(<BrowserRouter>
            <PageWrapper />
        </BrowserRouter>);
    });

    afterEach(() => {
        cleanup();
    });
    
    it("Displays a nav bar with two children", () => {
        const nav = screen.getByRole("navigation");

        expect(nav).toBeInTheDocument();
        expect(nav.childNodes.length).toBe(3);
    });

    it("Changes location when a navlink is clicked", async () => {
        expect(window.location.href).not.toContain("/getter")
        const getter = screen.getByText("Getter");
        await userEvent.click(getter);
        expect(window.location.href).toContain("/getter")
    });
});
