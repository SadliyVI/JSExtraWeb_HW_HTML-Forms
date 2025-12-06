/**
 * @jest-environment jsdom
 */

import Popover from "../src/popover";

describe("Popover class", () => {
    let button;

    beforeEach(() => {
        document.body.innerHTML = `
            <button id="btn">Test</button>
        `;
        button = document.getElementById("btn");
    });

    test("popover создаётся при первом вызове show()", () => {
        const pop = new Popover(button, "Hello");

        pop.show();

        const created = document.querySelector(".popover");
        expect(created).not.toBeNull();
        expect(created.textContent).toBe("Hello");
    });

    test("вызов hide() скрывает popover", () => {
        const pop = new Popover(button, "Hello");
        pop.show();

        pop.hide();

        expect(pop.pop.style.display).toBe("none");
    });

    test("toggle() показывает popover, если он скрыт", () => {
        const pop = new Popover(button, "Hello");
        pop.toggle();

        expect(pop.pop.style.display).toBe("block");
    });

    test("toggle() скрывает popover, если он показан", () => {
        const pop = new Popover(button, "Hello");
        pop.toggle();
        pop.toggle();

        expect(pop.pop.style.display).toBe("none");
    });
});
