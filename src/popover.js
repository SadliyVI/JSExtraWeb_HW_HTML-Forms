export default class Popover {
    constructor(element, message) {
        this.element = element;
        this.message = message;
        this.pop = null;

        this.element.addEventListener("click", () => this.toggle());
    }

    create() {
        if (this.pop) return;

        const div = document.createElement("div");
        div.className = "popover";
        div.textContent = this.message;

        document.body.appendChild(div);
        this.pop = div;
    }

    show() {
        this.create();

        const rect = this.element.getBoundingClientRect();
        const popRect = this.pop.getBoundingClientRect();

        this.pop.style.left = `${rect.left + rect.width / 2 - popRect.width / 2}px`;
        this.pop.style.top = `${rect.top - popRect.height - 5}px`;

        this.pop.style.display = "block";
    }

    hide() {
        if (this.pop) {
            this.pop.style.display = "none";
        }
    }

    toggle() {
        if (!this.pop || this.pop.style.display === "none") {
            this.show();
        } else {
            this.hide();
        }
    }
}
