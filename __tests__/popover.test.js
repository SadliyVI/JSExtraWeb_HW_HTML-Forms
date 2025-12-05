/** @jest-environment jest-environment-jsdom */
import Popover from "../popover.js";

describe("Popover button click", () => {
    let btn, pop;

    beforeEach(() => {
        document.body.innerHTML = `<button id="btn">Click me</button>`;
        btn = document.getElementById("btn");
        pop = new Popover(btn, "Введите информацию!");
    });

    afterEach(() => {
        if (pop.pop) pop.pop.remove();
        document.body.innerHTML = '';
    });

    test("popover shows on button click", () => {
        btn.getBoundingClientRect = () => ({
            left: 100, top: 200, width: 100, height: 40,
            right: 200, bottom: 240
        });
        Object.defineProperty(window, 'scrollX', { value: 0 });
        Object.defineProperty(window, 'scrollY', { value: 0 });

        btn.dispatchEvent(new MouseEvent("click", { bubbles: true }));

        const popEl = document.querySelector(".popover");
        expect(popEl).not.toBeNull();
        expect(popEl.textContent).toBe("Введите информацию!");
        expect(popEl.style.display).toBe("block");
    });

    test("popover hides on second click", () => {
        btn.dispatchEvent(new MouseEvent("click", { bubbles: true }));
        const popEl = document.querySelector(".popover");
        expect(popEl.style.display).toBe("block");

        btn.dispatchEvent(new MouseEvent("click", { bubbles: true }));
        expect(popEl.style.display).toBe("none");
    });
});
