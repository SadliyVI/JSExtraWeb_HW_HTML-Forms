/**
 * @jest-environment jsdom
 */

import Popover from "../src/popover";

describe("Popover class", () => {
    let button;

    beforeEach(() => {
        document.body.innerHTML = `
            <div class="container">
                <input id="input" type="text" />
                <button id="btn">Test</button>
            </div>
        `;
        button = document.getElementById("btn");

        button.getBoundingClientRect = () => ({
            top: 200,
            bottom: 230,
            left: 100,
            right: 200,
            width: 100,
            height: 30
        });
    });

    test("popover создаётся и показывается через show()", () => {
        const pop = new Popover(button, "Hello");
        pop.show();

        expect(pop.popover).not.toBeNull();
        expect(pop.popover.style.display).toBe("block");
    });

    test("popover скрывается через hide()", () => {
        const pop = new Popover(button, "Hello");
        pop.show();
        pop.hide();

        expect(pop.popover.style.display).toBe("none");
    });

    test("toggle() показывает и скрывает popover", () => {
        const pop = new Popover(button, "Hello");

        pop.toggle();
        expect(pop.popover.style.display).toBe("block");

        pop.toggle();
        expect(pop.popover.style.display).toBe("none");
    });

    test("popover скрывается при клике вне кнопки", () => {
        const pop = new Popover(button, "Hello");
        pop.show();

        document.body.click();

        expect(pop.popover.style.display).toBe("none");
    });
});
