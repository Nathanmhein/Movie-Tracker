import { describe, it, expect, afterEach, vi } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';

import * as matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);

import Getter from '.';

global.fetch = vi.fn()

function createFetchResponse(data) {
  return { json: () => new Promise((resolve) => resolve(data)) }
}

describe("Getter component", () => {

    afterEach(() => {
        cleanup();
    })

    it("Displays 1 joke if the API returns only one joke", async () => {
        const data = [
            {
                "setup": "What do reindeer hang on their Christmas trees?",
                "punchline": "hornaments"
            }
        ]

        fetch.mockResolvedValue(createFetchResponse(data))

        render(<Getter />);

        expect(fetch).toHaveBeenCalledWith('https://official-joke-api.appspot.com/random_ten')
        
        const jokes = await screen.findByRole("listitem");
        expect(jokes.childNodes.length).toBe(1);
        expect(jokes.childNodes[0].textContent).toBe("What do reindeer hang on their Christmas trees?hornaments")
    });
});