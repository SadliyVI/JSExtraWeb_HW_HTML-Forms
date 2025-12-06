/**
 * @jest-environment jsdom
 */

import { setupDOM } from "../__mocks__/domMock.js";

describe("index.js UI popover", () => {
    beforeEach(() => {
        document.body.innerHTML = "";
        setupDOM();
        jest.resetModules();
    });

    test("кнопка создаётся динамически", async () => {
        const module = await import("../src/index.js");

        const btn = document.getElementById("btn");

        expect(btn).not.toBeNull();
        expect(btn.textContent).toBe("Отправить");
    });

    test("popover создаётся динамически", async () => {
        await import("../src/index.js");

        const pop = document.getElementById("popover");
        expect(pop).not.toBeNull();
        expect(pop.classList.contains("popover")).toBe(true);
    });

    test("popover появляется при наведении", async () => {
        await import("../src/index.js");

        const btn = document.getElementById("btn");
        const pop = document.getElementById("popover");

        btn.dispatchEvent(new Event("mouseenter"));

        expect(pop.classList.contains("popover-visible")).toBe(true);
    });

    test("popover скрывается при mouseleave", async () => {
        await import("../src/index.js");

        const btn = document.getElementById("btn");
        const pop = document.getElementById("popover");

        btn.dispatchEvent(new Event("mouseenter"));
        btn.dispatchEvent(new Event("mouseleave"));

        expect(pop.classList.contains("popover-visible")).toBe(false);
    });
});
