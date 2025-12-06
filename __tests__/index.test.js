/**
 * @jest-environment jsdom
 */

import { setupDOM } from "../__mocks__/domMock.js";

describe("index.js popover behavior", () => {
    beforeEach(() => {
        document.body.innerHTML = "";
        setupDOM();
        jest.resetModules();
    });

    test("кнопка создаётся динамически", async () => {
        await import("../src/index.js");

        const btn = document.getElementById("btn");
        expect(btn).not.toBeNull();
        expect(btn.textContent).toBe("Click to toggle popover");
    });

    test("popover создаётся динамически", async () => {
        await import("../src/index.js");

        const pop = document.getElementById("popover");
        expect(pop).not.toBeNull();
        expect(pop.classList.contains("popover")).toBe(true);
    });

    test("popover появляется по клику на кнопку", async () => {
        await import("../src/index.js");

        const btn = document.getElementById("btn");
        const pop = document.getElementById("popover");

        btn.click();
        expect(pop.classList.contains("popover-visible")).toBe(true);
    });

    test("popover скрывается по повторному клику на кнопку", async () => {
        await import("../src/index.js");

        const btn = document.getElementById("btn");
        const pop = document.getElementById("popover");

        btn.click(); // показать
        btn.click(); // скрыть

        expect(pop.classList.contains("popover-visible")).toBe(false);
    });

    test("popover скрывается при клике вне кнопки и popover", async () => {
        await import("../src/index.js");

        const btn = document.getElementById("btn");
        const pop = document.getElementById("popover");

        btn.click(); // показать
        document.body.click(); // клик вне

        expect(pop.classList.contains("popover-visible")).toBe(false);
    });


});